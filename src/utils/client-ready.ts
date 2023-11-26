import chalk from "chalk";
import { ActivityType, Client, SlashCommandBuilder } from "discord.js";

export const clientReady = async (client: Client) => {
  console.log(chalk.bgBlack(`logged in as ${client?.user?.tag}`));
  client?.user?.setPresence({ status: "idle" });
  client?.user?.setActivity(`${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? "s" : ""}`, { type: ActivityType.Watching });

  // clear commands
  client?.application?.commands.set([]);

  const ping = new SlashCommandBuilder().setName("ping").setDescription("test command");

  client.application?.commands.create(ping);
};
