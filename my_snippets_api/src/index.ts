import express from "express";
import { v4 as uuidV4 } from "uuid";

const app = express();

app.use(express.json());

const snippets = [];

app.get("/snippet", (request, response) => {
  return response.json(snippets);
});

app.get("/snippet/:tech", (request, response) => {
  const { tech } = request.params;

  const snippet = snippets.find((snippet) => snippet.tech === tech);

  return response.json(snippet);
});

app.post("/snippet", (request, response) => {
  const { tech, title, code } = request.body;

  const snippet = {
    id: uuidV4(),
    tech,
    title,
    code,
  };

  snippets.push(snippet);

  return response.status(201).json(snippet);
});

app.put("/snippet/:id", (request, response) => {
  const { id } = request.params;
  const { tech, title, code } = request.body;

  const snippet = snippets.find((snippet) => snippet.id === id);

  if (!snippet) {
    return response.status(404).json({ error: "Snippet not found" });
  }

  snippet.tech = tech;
  snippet.title = title;
  snippet.code = code;

  return response.status(201).send();
});

app.delete("/snippet/:id", (request, response) => {
  const { id } = request.params;

  const snippet = snippets.find((snippet) => snippet.id === id);

  if (!snippet) {
    return response.status(404).json({ error: "Snippet not found" });
  }

  snippets.splice(snippet, 1);

  return response.status(204).send();
});

export { app };
