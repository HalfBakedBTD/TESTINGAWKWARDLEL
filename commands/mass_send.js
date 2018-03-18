const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Sorry, you don't have permissions to use this!");
	const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(`Sending users message:\n\t${sayMessage}`);
    message.guild.members.forEach(member => member.send(`Message from: <@${message.author.id}>:\n\t${sayMessage}`));
}
 
module.exports.help = {
  name: "masssend"
}