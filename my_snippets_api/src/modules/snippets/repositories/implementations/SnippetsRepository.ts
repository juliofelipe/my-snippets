import { Snippet } from "modules/snippets/model/Snippet";

import { ICreateSnippetDTO, ISnippetsRepository } from "../ISnippetsRepository";

class SnippetsRepository implements ISnippetsRepository {
  private snippets: Snippet[];

  private static INSTANCE: SnippetsRepository;

  private constructor() {
    this.snippets = [];
  }

  public static getInstance(): SnippetsRepository {
    if (!SnippetsRepository.INSTANCE) {
      SnippetsRepository.INSTANCE = new SnippetsRepository();
    }
    return SnippetsRepository.INSTANCE;
  }

  create({ tech, title, code }: ICreateSnippetDTO): void {
    const snippet = new Snippet();

    Object.assign(snippet, {
      tech,
      title,
      code,
      created_at: new Date(),
    });

    this.snippets.push(snippet);
  }

  list(): Snippet[] {
    return this.snippets;
  }

  findByTitle(title: string): Snippet {
    const snippet = this.snippets.find((snippet) => snippet.title === title);
    return snippet;
  }
}

export { SnippetsRepository };
