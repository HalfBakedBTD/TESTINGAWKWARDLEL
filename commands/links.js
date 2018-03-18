const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	return message.channel.send("**Sinon's  Invite Link:**\n\t :link: https://discordapp.com/api/oauth2/authorize?client_id=420031118088077314&permissions=8&scope=bot :link:\n\n**HalfBakedDiscord:** :link: https://discord.gg/euDVUuW :link: \n\n**HalfBakedYoutube:** :link: https://www.youtube.com/c/HalfBakedGaming15 :link: ")
}

module.exports.help = {
  name: "links"
}