import { Client, Collection, SlashCommandBuilder } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { __dirname } from "src/constants";

export const getSlashCommands = async (client: Client) => {
  const slashCommands = new Collection() as Collection<string, any>;
  const slashCommandFiles = readdirSync(join(__dirname, "src", "..", "src", "slash-commands")).filter(file => file.endsWith(".ts"));

  for (const file of slashCommandFiles) {
    const slashCommand = await import(`../slash-commands/${file}`);
    slashCommands.set(slashCommand.default.data.name, slashCommand);

    // console.log(slashCommand.default.data);

    const command = new SlashCommandBuilder().setName(slashCommand.default.data.name).setDescription(slashCommand.default.data.description);

    for (let i = 0; i < slashCommand.default.data.options.length; i++) {
      command.addStringOption(slashCommand.default.data.options[i]);
    }

    await client.application?.commands.create(command);

    console.log(`loaded command: ${slashCommand.default.data.name}`);
  }

  return slashCommands;
};
