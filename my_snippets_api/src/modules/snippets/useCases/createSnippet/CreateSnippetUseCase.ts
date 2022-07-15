import { ISnippetsRepository } from "../../repositories/ISnippetsRepository";

interface IRequest {
  tech: string;
  title: string;
  code: string;
}

class CreateSnippetUseCase {
  constructor(private snippetsRepository: ISnippetsRepository) {}

  execute({ tech, title, code }: IRequest): void {
    const snippetAlreadyExists = this.snippetsRepository.findByTitle(title);

    if (snippetAlreadyExists) {
      throw new Error("Snippet already exists");
    }

    this.snippetsRepository.create({ tech, title, code });
  }
}

export { CreateSnippetUseCase };
