const Discord = require('discord.js');
const bot11 = new Discord.Client();
const bot12 = new Discord.Client();
const bot13 = new Discord.Client();
const bot14 = new Discord.Client();
const bot15 = new Discord.Client();
const bot16 = new Discord.Client();
const bot17 = new Discord.Client();
const bot18 = new Discord.Client();
const bot19 = new Discord.Client();
const bot20 = new Discord.Client();


bot11.on('ready', () => {
    console.log(`S11-20`)
});


bot11.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot11.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot11.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot11.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB11 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot11.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f11"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot12.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot12.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot12.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot12.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB12 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot12.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f12"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot13.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot13.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot13.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot13.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB13 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot13.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f13"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot14.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot14.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot14.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot14.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB14 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot14.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f14"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot15.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot15.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot15.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot15.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB15 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot15.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f15"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot16.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot16.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot16.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot16.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB16 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot16.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f16"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot17.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot17.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot17.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot17.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB17 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot17.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f17"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot18.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot18.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot18.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot18.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB18 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot18.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f18"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot19.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot19.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot19.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot19.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB19 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot19.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f19"){
        message.channel.send(args.join(" "))
    }
});

////////////////////////////////////////////////////////////////
bot20.on('message', message => {
    if(message.content.startsWith(`f-d`)){
        message.channel.send(`#daily`);
    }
});


bot20.on('message', message => {
    if(message.content.startsWith(`f-r`)){
        message.channel.send(`#rep <@505101712839671838>`)
    }
});


bot20.on(`ready`, () => {
    let count = 0;
    let ecount = 0;
    let channel = bot20.guilds.get("520354655604178958").channels.find(c => c.id == "520370676851408901");
  
    for(let x = 0; x < 90000; x++) {
      channel.send(`**FB20 Message ${x}**`)
        .then(m => {
          count++;
        })
    }
});


bot20.on('message', message => {
    if(message.author.bot) return;
    let command = message.content.split(" ")[0];
    let args = message.content.split(" ").slice(1);
    if(!args) return message.reply(`**شو بدك امي تقول؟؟؟**`);
    if(command == "f20"){
        message.channel.send(args.join(" "))
    }
});
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
bot11.login(process.env.FB11);
bot12.login(process.env.FB12);
bot13.login(process.env.FB13);
bot14.login(process.env.FB14);
bot15.login(process.env.FB15);
bot16.login(process.env.FB16);
bot17.login(process.env.FB17);
bot18.login(process.env.FB18);
bot19.login(process.env.FB19);
bot20.login(process.env.FB20);
