import { Response, Request } from "express";

import { CreateSnippetUseCase } from "./CreateSnippetUseCase";

class CreateSnippetController {
  constructor(private createSnippetUseCase: CreateSnippetUseCase) {}

  handle(request: Request, response: Response) {
    const { tech, title, code } = request.body;

    this.createSnippetUseCase.execute({ tech, title, code });

    return response.status(201).send();
  }
}

export { CreateSnippetController };
