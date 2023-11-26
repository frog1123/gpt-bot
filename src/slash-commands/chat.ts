import { SlashCommandBuilder } from "discord.js";
import { openai } from "../openai";

export default {
  data: new SlashCommandBuilder().setName("chat").setDescription("this runs the chat command"),
  execute: async (interaction: any) => {
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo"
    });

    console.log(chatCompletion.choices);

    await interaction.reply(chatCompletion.choices[0].message);
  }
};
