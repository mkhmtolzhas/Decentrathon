import postService from "./post-service";
import { Request, Response } from "express";

class PostController {
    private postService = postService;

    async createPost(request: Request, response: Response) {
        try {
            const data = request.body;
            const post = await this.postService.createPost(data);
            response.status(201).json(post);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    async getPost(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const post = await this.postService.getPost(id);
            response.status(200).json(post);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    async getPosts(request: Request, response: Response) {
        try {
            const posts = await this.postService.getPosts();
            response.status(200).json(posts);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    async updatePost(request: Request, response: Response) {
        try {
            const id = request.params.id;
            const data = request.body;
            const post = await this.postService.updatePost(id, data);
            response.status(200).json(post);
        } catch (error) {
            response.status(500).send(error);
        }
    }

    async deletePost(request: Request, response: Response) {
        try {
            const id = request.params.id;
            await this.postService.deletePost(id);
            response.status(204).send();
        } catch (error) {
            response.status(500).send(error);
        }
    }
}

export default new PostController();