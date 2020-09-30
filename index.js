const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();

const guildID = "702414225145987103";
const channelID ="702414225145987107";

client.once('ready', () => {
	console.log('Ready!');
});

client.on("message", async(msg) => {
  console.log(msg);

  if (msg.guild.id === guildID && msg.channel.id == channelID){
    if(msg.content.toLowerCase() === "ping"){
			msg.react('🍎');
			//await msg.channel.react("\:smile:");
      //await msg.reply("pong");
      //console.log("Ping pong");
    }
  }
})

client.login(process.env.BOT_TOKEN);
