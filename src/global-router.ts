import { Router } from 'express';
import authRouter from './auth/auth-router';
import postRouter from './post/post-router';
import llmRouter from './llm/llm-router';

const globalRouter = Router();


globalRouter.use(authRouter);
globalRouter.use(postRouter);
globalRouter.use(llmRouter);



export default globalRouter;
