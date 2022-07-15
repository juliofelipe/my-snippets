import { SnippetsRepository } from "../../repositories/implementations/SnippetsRepository";
import { CreateSnippetController } from "./CreateSnippetController";
import { CreateSnippetUseCase } from "./CreateSnippetUseCase";

const snippetRepository = SnippetsRepository.getInstance();

const createSnippetUseCase = new CreateSnippetUseCase(snippetRepository);

const createSnippetController = new CreateSnippetController(
  createSnippetUseCase
);

export { createSnippetController };
