import { SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder().setName("ping").setDescription("this runs the ping command"),
  execute: async (interaction: any) => {
    const startTime = Date.now();
    const reply = await interaction.reply("Pinging...");

    const endTime = Date.now();
    const responseTime = endTime - startTime;

    await reply.edit(`Pong! Response time: \`${responseTime}ms\``);
  }
};
