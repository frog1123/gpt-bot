import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { clientReady } from "./utils/client-ready";
import { handleSlashCommand } from "./utils/slash-handler";
import { getSlashCommands } from "./utils/get-slash-commands";

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

  client.on(Events.ClientReady, () => {
    clientReady(client);
  });

  const { slashCommands } = await getSlashCommands(client);

  client.on(Events.InteractionCreate, async interaction => {
    handleSlashCommand(interaction);
  });

  client.login(process.env.BOT_TOKEN);
})();
