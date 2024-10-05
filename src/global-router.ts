import { Router } from 'express';
import authRouter from './auth/auth-router';
import postRouter from './post/post-router';

const globalRouter = Router();


globalRouter.use(authRouter);
globalRouter.use(postRouter);



export default globalRouter;
