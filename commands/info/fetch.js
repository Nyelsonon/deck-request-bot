const { Message, Client, DiscordAPIError } = require("discord.js");
const { MessageActionRow, MessageButton } = require('discord.js');
const { MessageEmbed } = require('discord.js');

/*
const fetch = require('node-fetch');

let url = "https://www.reddit.com/r/popular.json";

let settings = { method: "Get" };

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
    });
*/

const fetch = require('node-fetch');

module.exports = {
    name: "fetch",
    aliases: ['f'],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    
    run: async (client, message, args) => {
        // const new_embed = new MessageEmbed()
        // .setTitle("Deck Submitted!")
        // .addFields(
        //     {name:'Deck ID', value:args[0]},
        //     {name:'SB Kitty', value:args[0]},
        //     {name:'DRID', value:args[0]},
        //     {name: 'Author', value:"<@" + message.author.id + ">"}
        // )
        arg_comb = args[0]
        if (args.length>1){
            for (let i = 1; i<args.length;i++){
                arg_comb = arg_comb + " " + args[i]
            }
        }
        let url = "https://raw.githubusercontent.com/KittySparkles/stormbound-kitty/main/src/data/cards.json";

        let settings = { method: "Get" };

        let item = await fetch(url, settings)
            .then(res => res.json())
            .then((json) => {
                for (let i = 0; i < json.length; i++) {
                    console.log(arg_comb)
                    if (String(json[i].name) == arg_comb){
                        return [json[i].name, json[i].id, json[i].sid, json[i].type, json[i].faction]
                    }
                }
            });
        console.log(item)
        message.channel.send({ content: String(item) });

    },
};