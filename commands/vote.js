const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    if (!args) return message.reply("You must have something to vote for!")
		let pollchannel = message.guild.channels.find(`name`, "polls");
		if(!pollchannel) return message.channel.send("Couldn't find polls channel!");
        pollchannel.send(`:ballot_box:  ${message.author.username} started a vote!`);
        const pollTopic = await pollchannel.send(`${args.join(" ")}`) 
        await pollTopic.react(`✅`);
        await pollTopic.react(`❌`);

        message.delete();

}

module.exports.help = {
    name: "vote"
}