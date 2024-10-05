import { Router } from "express";
import llmController from "./llm-controller";


const llmRouter = Router();

llmRouter.post("/llm", llmController.create.bind(llmController));


export default llmRouter;