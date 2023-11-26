import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";
import { clientReady } from "./utils/client-ready";

(async () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });

  client.on(Events.ClientReady, () => {
    clientReady(client);
  });

  client.on(Events.InteractionCreate, async interaction => {
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
