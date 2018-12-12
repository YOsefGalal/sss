﻿const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {
console.log("Discord Bot By So.?");
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')
  console.log('BySo.?')


});

client.on("guildMemberAdd", member => {
  member.createDM().then(function (author) {
  return author.send(' ** حرام واحد جميل مثلك م يكون عندنا .. تنورنا  https://discord.gg/Dq5abcr ** ')

}).catch(console.error)
})

client.login("NTIxNzc4MjQwMzI3NTE2MTYz.DvK0fg.nVKkyAvco7byGtSKFysQ6RUpqaM");