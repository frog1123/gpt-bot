import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("chat").setDescription("this runs the chat command"),
  execute: async (interaction: any) => {
    await interaction.reply("you used the chat command");
  }
};
