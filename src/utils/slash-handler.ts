import { Interaction } from "discord.js";

export const handleSlashCommands = async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) {
    console.log("not slash");
    return;
  }

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
};
