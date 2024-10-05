import post from "./model/post";

class PostService {
    async createPost(data: any) {
        return post.create(data);
    }
    
    async getPost(id: string) {
        return post.findById(id);
    }
    
    async getPosts() {
        return post.find();
    }
    
    async updatePost(id: string, data: any) {
        return post.findByIdAndUpdate(id, data, { new: true });
    }
    
    async deletePost(id: string) {
        return post.findByIdAndDelete(id);
    }
}

export default new PostService();