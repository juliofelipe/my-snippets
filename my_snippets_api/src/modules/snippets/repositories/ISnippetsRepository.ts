import { Snippet } from "../model/Snippet";

interface ICreateSnippetDTO {
  tech: string;
  title: string;
  code: string;
}

interface ISnippetsRepository {
  findByTitle(tech: string): Snippet;
  list(): Snippet[];
  create({ tech, title, code }: ICreateSnippetDTO): void;
}

export { ISnippetsRepository, ICreateSnippetDTO };
