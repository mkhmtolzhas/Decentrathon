import { Router } from "express";
import PostController from "./post-controller";

const postRouter = Router();

postRouter.post("/posts", PostController.createPost.bind(PostController));

postRouter.get("/posts", PostController.getPosts.bind(PostController));

postRouter.get("/posts/:id", PostController.getPost.bind(PostController));

postRouter.put("/posts/:id", PostController.updatePost.bind(PostController));

postRouter.delete("/posts/:id", PostController.deletePost.bind(PostController));

export default postRouter;

