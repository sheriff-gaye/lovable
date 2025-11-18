import { inngest } from "./client";
import { createAgent, openai } from "@inngest/agent-kit";


export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {



    const codeAgent = createAgent({
      name: "Code Agent",
      system: "You are an expert Next Js Developer .  You write readable,Maintainable Code . You write simple Next JS & React Snippets",
      model: openai({ model: "gpt-4o" }),
    });

    const { output } = await codeAgent.run(`Write the following snippet: ${event.data.value}`)




    return { output }
  },
);