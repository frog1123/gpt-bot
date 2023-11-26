import { Collection, Interaction } from "discord.js";

export const handleSlashCommand = async (slashCommands: Collection<string, any>, interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (typeof slashCommands.get(interaction.commandName) === "undefined") return;

  console.log(interaction.options);

  slashCommands.get(interaction.commandName)?.default.execute(interaction);
};
