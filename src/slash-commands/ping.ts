import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("test").setDescription("test"),
  execute: async (interaction: any) => {
    await interaction.reply("you used a slash command");
  }
};
