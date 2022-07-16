import { Request, Response } from "express";

import { ListSnippetsUseCase } from "./ListSnippetsUseCase";

class ListSnippetsController {
  constructor(private listSnippetsUseCase: ListSnippetsUseCase) {}

  handle(request: Request, response: Response): Response {
    const all = this.listSnippetsUseCase.execute();

    return response.json(all);
  }
}

export { ListSnippetsController };
