import { SnippetsRepository } from "../../repositories/implementations/SnippetsRepository";
import { ListSnippetsController } from "./ListSnippetsController";
import { ListSnippetsUseCase } from "./ListSnippetsUseCase";

const snippetsRepository = SnippetsRepository.getInstance();
const listSnippetsUseCase = new ListSnippetsUseCase(snippetsRepository);
const listSnippetsController = new ListSnippetsController(listSnippetsUseCase);

export { listSnippetsController };
