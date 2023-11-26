import { Collection, Interaction } from "discord.js";

export const handleSlashCommand = async (slashCommands: Collection<string, any>, interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (typeof slashCommands.get(interaction.commandName) === "undefined") return;

  slashCommands.get(interaction.commandName)?.default.execute(interaction);
};
