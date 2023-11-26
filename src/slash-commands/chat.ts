import { SlashCommandBuilder } from "discord.js";
import { openai } from "../openai";

export default {
  data: new SlashCommandBuilder()
    .setName("chat")
    .setDescription("this runs the chat command")
    .addStringOption(option => option.setName("message").setDescription("Ask bot-gpt...").setRequired(true)),
  execute: async (interaction: any) => {
    try {
      const message = interaction.options.getString("message") || "";

      if (message.length === 0) {
        await interaction.reply("Message is required");
        return;
      }

      if (message.length >= 100) {
        await interaction.reply("Message must be under 100 characters");
        return;
      }

      const reply = await interaction.reply("thinking...");

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: message }],
        model: "gpt-3.5-turbo"
      });

      await reply.edit(chatCompletion.choices[0]?.message?.content);
    } catch (err) {
      console.error("[CHAT]", err);
      interaction.reply("Something went wrong :/");
    }
  }
};
