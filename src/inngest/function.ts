import { inngest } from "./client";
import { Agent, agenticOpenai as openai, createAgent } from "@inngest/agent-kit";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {



     const writer = createAgent({
      name: "writer",
      system: "You are an expert writer.  You write readable, concise, simple content.",
      model: openai({ model: "gpt-4o", step }),
    });




    return { message: `Hello ${event.data.email}!` };
  },
);