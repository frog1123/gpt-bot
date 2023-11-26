import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { clientReady } from "./utils/client-ready";
import { handleSlashCommand } from "./utils/slash-handler";

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

  client.on(Events.ClientReady, async () => {
    const data = await clientReady(client);
    console.log(data.slashCommands);
  });

  client.on(Events.InteractionCreate, async interaction => {
    handleSlashCommand(interaction);
  });

  client.login(process.env.BOT_TOKEN);
})();
