import { ISnippetsRepository } from "modules/snippets/repositories/ISnippetsRepository";

import { Snippet } from "../../model/Snippet";

class ListSnippetsUseCase {
  constructor(private snippetsRepository: ISnippetsRepository) {}

  execute(): Snippet[] {
    const snippets = this.snippetsRepository.list();

    return snippets;
  }
}

export { ListSnippetsUseCase };
