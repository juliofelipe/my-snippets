import { Router } from "express";

import { createSnippetController } from "../modules/snippets/useCases/createSnippet";

const snippetsRoutes = Router();

snippetsRoutes.post("/", (request, response) => {
  return createSnippetController.handle(request, response);
});

export { snippetsRoutes };
