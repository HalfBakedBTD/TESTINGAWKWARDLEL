const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    return message.channel.send("**Sinon's  Invite Link:**\n\t :link: https://discordapp.com/api/oauth2/authorize?client_id=420031118088077314&permissions=8&scope=bot :link:")
}
 
module.exports.help = {
  name: "invite"
}