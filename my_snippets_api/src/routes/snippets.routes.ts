import { Router } from "express";

import { createSnippetController } from "../modules/snippets/useCases/createSnippet";
import { listSnippetsController } from "../modules/snippets/useCases/listSnippets";

const snippetsRoutes = Router();

snippetsRoutes.post("/", (request, response) => {
  return createSnippetController.handle(request, response);
});

snippetsRoutes.get("/", (request, response) => {
  return listSnippetsController.handle(request, response);
});

export { snippetsRoutes };
