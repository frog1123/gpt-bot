import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("this runs the ping command"),
  execute: async (interaction: any) => {
    await interaction.reply("you used a slash command");
  }
};
