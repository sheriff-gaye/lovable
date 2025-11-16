import { inngest } from "./client";
import { createAgent, openai } from "@inngest/agent-kit";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {



    const codeAgent = createAgent({
      name: "writer",
      system: "You are an expert writer.  You write readable, concise, simple content.",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(`Write the following snippet: ${event.data.value}`)




    return { output }
  },
);