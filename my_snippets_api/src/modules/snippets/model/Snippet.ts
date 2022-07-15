import { v4 as uuidV4 } from "uuid";

class Snippet {
  id: string;
  tech: string;
  title: string;
  code: string;
  created_at: Date;
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Snippet };
