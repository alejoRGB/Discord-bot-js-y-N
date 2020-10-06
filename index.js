const Discord = require("discord.js");
require("dotenv").config();
const client = new Discord.Client();
const PREFIX = "p!";

const guildID = "702414225145987103";
const channelID ="760956563232915506";

client.once('ready', () => {
	console.log('Ready!');
});

// module.exports.help = {
// 	name: "react"
// }
client.on("message", async(msg) =>{
	//console.log(msg);
	if(msg.content ==="hola"){

		console.log("dijo hola")
	}
})
//new Discord.Message(client, "hey", ChannelID);

client.on("message", async(msg) => {
  // if (msg.content === "!poll"{
	// 	msg.reply("S1mple");
	// 	msg.reply("ZywOo");
	// }

  if (msg.guild.id === guildID && msg.channel.id == channelID){
			if(msg.content === "!poll"){
				msg.channel.send("Opcion 1");
				msg.channel.send("Opcion 2");
			}
			if(msg.content ==="Opcion 1"){
				msg.react('🤚');
			}
			if(msg.content ==="Opcion 2"){
				msg.react('🤚');
			}
		  if(msg.content.toLowerCase() === "ping"){
			msg.react('🍎');
			//await msg.channel.react("\:smile:");
      //await msg.reply("pong");
      console.log();
    }
  }
})

client.login(process.env.BOT_TOKEN);
