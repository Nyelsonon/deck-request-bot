const { Message, Client, DiscordAPIError } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');


// [1:Swarm, 2:Winterpact, 3:Ironclad, 4:Shadowfen]

module.exports = {
    name: "submit",
    aliases: ['s'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    
    run: async (client, message, args) => {
        let deck_id_encoded = args[0]
        let deck_id_obj = Buffer.from(deck_id_encoded, "base64")
        let deck_id = deck_id_obj.toString("utf8")
        deck_id = deck_id.slice(1)
        sids = []
        temp = ""

        for (let i = 0;i<deck_id.length;i++){
            if (i!=0){
                if(i%4==0){
                    sids.push(temp)
                    temp = ""
                }
            }
            temp = temp+deck_id[i]
        }
        console.log(sids.toString())
        cards = []
        let url = "https://raw.githubusercontent.com/Nyelsonon/deck-request-bot/main/data/cards.json";

        let settings = { method: "Get" };
        for (let j = 0; j<sids.length;j++){
            let item = await fetch(url, settings)
                .then(res => res.json())
                .then((json) => {
                    for (let i = 0; i < json.length; i++) {
                        if (json[i].sid == sids[j]){
                            return json[i].mana.toString()+json[i].name.toString()
                        }
                    }
                });
            cards.push(item)
        }
        console.log(cards)
        cards.sort()
        for (let i = 0; i<cards.length;i++){
            cards[i] = cards[i].slice(1)
        }
        const new_embed = new MessageEmbed()
        .setTitle("Deck Submitted!")
        .addFields(
            {name:'Reward', value:'5 rubies'},
            {name:'Deck ID', value:args[0]},
            {name:'SB Kitty', value:args[0]},
            {name:'DRID', value:args[0]},
            {name: 'Author', value:"<@" + message.author.id + ">"},
            {name: 'Deck', value: cards.toString()},
        )
        message.channel.send({ embeds: [new_embed] });


    },
};
