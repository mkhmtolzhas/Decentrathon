import 'dotenv/config';
import express from 'express';
import connectDB from './db';
import globalRouter from './global-router';
import { logger } from './logger';
import cors from 'cors';
import { Server } from 'socket.io';
import { createServer } from "node:http"
import LLMSocketService from './llm/llm-socket-service';

const app = express();
const PORT = process.env.PORT || 3000;
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

connectDB();

app.use(cors());

app.use(logger);
app.use(express.json());
app.use('/api/v1/',globalRouter);

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('prompt', async (data) => {
    const llmSocketService = new LLMSocketService();
    const message = await llmSocketService.create(data);
    io.emit('response', {
      response: message
    });
  })
});


server.listen(PORT, () => {
  console.log(`Server runs at http://localhost:${PORT}`);
});
