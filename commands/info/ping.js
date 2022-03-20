const { Message, Client } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: "ping",
    aliases: ['p'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    
    run: async (client, message, args) => {

        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setCustomId('primary')
                .setLabel('Primary')
                .setStyle('PRIMARY'),
        );

        message.channel.send({content: "pong", components: [row]});
    },
};
