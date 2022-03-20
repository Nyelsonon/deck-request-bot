const client = require("../index");
const mongoose = require('mongoose')

client.on("ready", () =>
    console.log(`${client.user.tag} is up and ready to go!`)
);
