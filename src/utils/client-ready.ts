import chalk from "chalk";
import { ActivityType, Client, Collection, SlashCommandBuilder } from "discord.js";
import { readdirSync } from "fs";
import { join } from "path";
import { __dirname } from "src/constants";

export const clientReady = async (client: Client) => {
  console.log(chalk.bgBlack(`logged in as ${client?.user?.tag}`));
  client?.user?.setPresence({ status: "idle" });
  client?.user?.setActivity(`${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? "s" : ""}`, { type: ActivityType.Watching });

  // clear commands
  client?.application?.commands.set([]);

  const slashCommands = new Collection() as Collection<string, any>;
  const slashCommandFiles = readdirSync(join(__dirname, "src", "..", "src", "slash-commands")).filter(file => file.endsWith(".ts"));
  for (const file of slashCommandFiles) {
    // const slashCommand = await import(`./slash-commands/${file}`);
    // slashCommands.set(slashCommand.default.data.name, slashCommand);
    // console.log("loaded command: ", slashCommand);

    console.log(file);
  }

  console.log(readdirSync(join(__dirname, "src", "..", "src", "slash-commands")));

  const ping = new SlashCommandBuilder().setName("ping").setDescription("test command");
  client.application?.commands.create(ping);
};
