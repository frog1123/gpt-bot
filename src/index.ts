import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { clientReady } from "./utils/client-ready";
import { handleSlashCommands } from "./utils/slash-handler";

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

  client.on(Events.ClientReady, () => {
    clientReady(client);
  });

  client.on(Events.InteractionCreate, async interaction => {
    handleSlashCommands(interaction);
  });

  client.login(process.env.BOT_TOKEN);
})();
