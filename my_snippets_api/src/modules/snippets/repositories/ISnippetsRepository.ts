import { Snippet } from "../model/Snippet";

interface ICreateSnippetDTO {
  tech: string;
  title: string;
  code: string;
}

interface ISnippetsRepository {
  findByTitle(title: string): Snippet;
  list(): Snippet[];
  create({ tech, title, code }: ICreateSnippetDTO): void;
}

export { ISnippetsRepository, ICreateSnippetDTO };
