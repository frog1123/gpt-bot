import { ActivityType, Client, Events, GatewayIntentBits, SlashCommandBuilder } from "discord.js";
import chalk from "chalk";
import "dotenv/config";

const commands = [
  {
    name: "test",
    description: "Replies with Pong!"
  }
];

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

  client.on(Events.ClientReady, () => {
    console.log(chalk.bgBlack(`logged in as ${client?.user?.tag}`));
    client?.user?.setPresence({ status: "idle" });
    client?.user?.setActivity(`${client.guilds.cache.size} server${client.guilds.cache.size > 1 ? "s" : ""}`, { type: ActivityType.Watching });

    const test = new SlashCommandBuilder().setName("test").setDescription("test command");

    client.application?.commands.create(test);
  });

  try {
    console.log("Started refreshing application (/) commands");

    console.log("Successfully reloaded application (/) commands");
  } catch (err) {
    console.error("[ERROR]", err);
  }

  client.on(Events.InteractionCreate, async interaction => {
    console.log(interaction);

    if (!interaction.isChatInputCommand()) {
      console.log("not slash");
      return;
    }

    if (interaction.commandName === "test") {
      await interaction.reply("Pong!");
    }
  });

  client.login(process.env.BOT_TOKEN);
})();
