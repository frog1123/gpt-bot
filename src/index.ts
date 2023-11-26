import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { clientReady } from "./utils/client-ready";
import { handleSlashCommand } from "./utils/slash-handler";
import { getSlashCommands } from "./utils/get-slash-commands";

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

  let slashCommands: Collection<string, any>;
  client.on(Events.ClientReady, async () => {
    clientReady(client);
    slashCommands = await getSlashCommands(client);
  });

  client.on(Events.InteractionCreate, async interaction => {
    handleSlashCommand(slashCommands, interaction);
  });

  client.login(process.env.BOT_TOKEN);
})();
