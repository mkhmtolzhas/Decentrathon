import LLMService from "./llm-service";

class LLMController {
    private llmService = new LLMService();

    async create(request, response) {
        try {
            const { userPrompt } = request.body;
            const message = await this.llmService.create(userPrompt);
            response.status(200).json({
                response : message
            });
        } catch (error) {
            response.status(500).send(error);
        }
    }
}

export default new LLMController();