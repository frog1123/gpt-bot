import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("test").setDescription("this runs the test command"),
  execute: async (interaction: any) => {
    await interaction.reply("you used the test command");
  }
};
