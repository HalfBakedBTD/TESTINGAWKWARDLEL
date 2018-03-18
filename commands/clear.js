const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No. Why would I clear for you?");
  if(!args[0]) return message.channel.send("Use: `s!clear <amount of messages to clear>`.\n\nExample: `s!clear 10` would clear 10 messages.");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`**__Cleared ${args[0]} messages.__**`).then(msg => msg.delete(5000));
});


}

module.exports.help = {
  name: "clear"
}