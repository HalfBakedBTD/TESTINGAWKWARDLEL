const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("**HalfBakedDiscord:** :link: https://discord.gg/euDVUuW :link: ")
}

module.exports.help = {
  name: "discord"
}