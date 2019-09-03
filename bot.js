const Discord = require("discord.js"); const { RichEmbed } = require('discord.js'); const client = new Discord.Client(); const figlet = require('figlet');; const fs = require('fs');const prefix = require('./prefix.json'); function wait(ms){var d=new Date();var d2=null;do{d2=new Date()}while(d2-d<ms);}



//Stastic Command
function syncStats(){require("./modules/stats/main.js").sync(client.users.size,client.channels.size,client.guilds.size);};

//Signale
const options={disabled:!1,interactive:!1,stream:process.stdout,types:{command:{color:'green',label:'c  COMMAND'},info:{color:'grey',label:'INFO',},error:{color:'red',label:'ERROR',}}}; const { Signale } = require('signale'); const signal = new Signale(options); const config = require("./config.json"); const package = require('./package.json'); const build = package.build; const ver = package.version; const ownerID = package.ownerID; const ytapi = config.ytApiToken;



//Check what branch SeedBot is running on
if (package.branch == "canary") {var branch = "Canary";}if (package.branch === "stable") {var branch = "Stable";}

signal.info("Starting SeedBot...");
signal.info("Copyright 2018-2019, jyles.club and DARiOX.club");
signal.info("Branch: " + branch);
signal.info('Running SeedBot ' + branch + " (" + ver + ", build" + build +")");

//Math command
client.on('message',async message=>{if(message.author.bot)return;if(message.content.indexOf(prefix.math)!==0)return;const args=message.content.slice(prefix.math.length).trim().split(/ +/g);const devcommand=args.shift().toLowerCase();if(message.content.startsWith(prefix.math)){let calculate="="+message.content.toLowerCase().substring(prefix.math.length);if(isFinite(calculate.replace(/\=|\+|\-|\*|\/|\÷|\%|\(|\)|\,|\ |math.|pow|sqrt|round|floor|ceiling|ceil|pi|π|euler|absolute|abs|exp|logarithm|log|random|rand|rng/g,''))){calculate=calculate.replace(/ /g,"").replace(/÷/g,"/").replace(/power|pow/g,"Math.pow").replace(/sqrt|squareroot/g,"Math.sqrt").replace(/round/g,"Math.round").replace(/floor/g,"Math.floor").replace(/ceiling|ceil/g,"Math.ceil").replace(/pi|π/g,"Math.PI").replace(/euler/g,"Math.E").replace(/absolute|abs/g,"Math.abs").replace(/exp/g,"Math.exp").replace(/logarithm|log/g,"Math.log").replace(/random|rand|rng/g,"Math.random()");if(calculate.replace(/[^%]/g,"").length>0){for(let i=0;i<calculate.replace(/[^%]/g,"").length;i++){while((calculate[getSubstringIndex(calculate,"%",i+1)+1]=="+"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="-"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="*"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="/"||calculate[getSubstringIndex(calculate,"%",i+1)+1]=="("||calculate[getSubstringIndex(calculate,"%",i+1)+1]==")"||calculate[getSubstringIndex(calculate,"%",i+1)+1]==","||getSubstringIndex(calculate,"%",i+1)+1==calculate.length)&&calculate.replace(/[^%]/g,"").length>0){for(let j=getSubstringIndex(calculate,"%",i+1);j>-1;j--){if(calculate[j]=="="||calculate[j]=="+"||calculate[j]=="-"||calculate[j]=="*"||calculate[j]=="/"||calculate[j]=="("||calculate[j]==")"||calculate[j]==","){calculate=calculate.substring(0,j+1)+(calculate.substring(j+1,getSubstringIndex(calculate,"%",i+1))/100)+calculate.substring(getSubstringIndex(calculate,"%",i+1)+1,calculate.length);break}}}}}calculate=calculate.replace(/=/g,"");if(isFinite(eval(calculate)))message.channel.send(eval(calculate));console.log(eval(calculate))}}})

//Developer Commands
client.on('message',async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix.dev) !== 0) return;
  const args = message.content.slice(prefix.dev.length).trim().split(/ +/g);
  const devcommand = args.shift().toLowerCase();

//Fetches Public Internet Protocol Address
  if (devcommand === "getip") {
    syncStats()
      const extIP = require('external-ip'); let useragent = "+SeedBot-" && package.version && " http://seedbot.jyles.club"; let getIP = extIP({ eplace: true, services: ['http://dxcdn.net/api/public-ip.php'], timeout: 600, getIP: 'parallel', userAgent: useragent});
    let type = args.slice(0).join(' ');
    if (message.author.id === package.ownerID){
      getIP((err, ip) => {
        if (err) {
          throw err;
        }
         let evalEmbed = new Discord.RichEmbed()
            .setColor('#0099ff')
            .setTitle('Get Global IP Address')
            .setAuthor('s~getip')
            .setTimestamp()
            .setDescription('Global IP Address:\n```\n' + ip + "\n```");
          message.channel.send(evalEmbed);
      });
    }
    if (message.author.id !== package.ownerID) {
      message.reply('You do not have permission to use this developer command\nSorry!');
    }
  }

//Annoince to All Servers (Broken :/ )
  if (devcommand === 'announce') {
    syncStats()
    //let message = args.slice(0).join(" ")
    //let array = client.channels.array().sort();
    //if (message.author.id === package.ownerID) {
    //  client.channels.get(array).send(message);
    //} else {
    //  message.reply('you do not have permissions to use this devcommand,\n so ***a s c e n d*** to the 4th ***d i m e n s i o n***');
    //}
    message.channel.send(require('./modules/error.js').disabled(devcommand,message.author.username));
  }

//Sends a message to the channelID specifiyed.
  if (devcommand === "channelsend") {
    syncStats()
    let channelid = args.slice(0).join(' ').split(' ')[0];
    let content = args.slice(1).join(' ');
    let msg = channelid && " " && content;
    if (message.author.id === package.ownerID) {
      if (msg.length < 1) {
        //Send message with incorrect arguments error
        let evalEmbed = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle('Message Fail!')
          .setAuthor('Syntax Error')
          .setTimestamp()
          .setDescription("No message or channel ID was stated. the correct syntax is \n`s~channelsend channelid messagecontent`");
        message.channel.send(evalEmbed);
      }
      if (msg.length > 1) {
        //yay it finally sends the fucking command
        client.channels.get(channelid).send(content);

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('Message Sent!')
          .setTimestamp()
          .setDescription("Message has been sent to the channelID of;\n ``" + channelid + "``\n\n And with the content of;\n``" + content + "``");
        message.channel.send(evalEmbed);
      }
    }
    if (message.author.id !== package.ownerID) {
      message.reply("You do not have permission to use this command.");
    }
  }

//Gets Bot Stastics
  if (devcommand === "stats") {
    syncStats()
    let type = args.slice(0).join(' ');
    if (message.author.id === package.ownerID) {
      if (type === "serverlist") {

        var serverlist = client.guilds.array().sort();
        serverlist.toString().replace(",", "\n");

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('Server List')
          .setAuthor("Number of Available Servers: " + client.guilds.size)
          .setTimestamp()
          .setDescription(serverlist);
        message.channel.send(evalEmbed);
      }
      if (type === "usercount") {
        let usercount = client.users.size;

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('User Count')
          .setTimestamp()
          .setDescription(usercount);
        message.channel.send(evalEmbed);
      }
      if (type === "channelcount") {
        let channelcount = client.channels.count;

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#90d190')
          .setTitle('Channel Count')
          .setTimestamp()
          .setDescription(channelcount);
        message.channel.send(evalEmbed);
      }
      if (type !== "channelcount" || type !== "serverlist" || type !== "usercount") {
        let evalEmbed = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle('Invalid Arguments')
          .setTimestamp()
          .setDescription("You have not added a varaible to the command.\nThe current types are:\n```\nserverlist\nusercount\nchannelcount\n```\n\n e.g: `s~stats serverlist`");
        message.channel.send(evalEmbed);
      }


    }
  }

//Run Node.JS Command while returning the console output.
  if (devcommand === 'eval') {
    syncStats()
    if (message.author.id === package.ownerID) {
      try {
        const code = args.join(" ");
        let evaled = eval(code);

        if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

        let evalEmbed = new Discord.RichEmbed()
          .setColor('#32a852')
          .setTitle('Node.JS Eval')
          .setTimestamp()
          .setDescription("Input: \n```js\n" + code + "\n```\n\nResult: \n```js\n" + clean(evaled), {code:"xl"} + "\n```");
        message.channel.send(evalEmbed);
      } catch (err) {
        let evalEmbed = new Discord.RichEmbed()
          .setColor('#ff0000')
          .setTitle('Error')
          .setTimestamp()
          .setDescription(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
        message.channel.send(evalEmbed);
      }
    }
  }
  
//Restarts Discord Bot
  if (devcommand === "restart") {
    syncStats()
    if (message.author.id === package.ownerID) {
      message.channel.send('Bot it now Restarting. Good Night :first_quarter_moon_with_face: :bed: ');
      client.user.setActivity('Bot is Restarting...');
      require("./module/restart/main").init(message.channel);
    } else {
      message.reply('you do not have permissions to use this devcommand,\n so ***a s c e n d*** to the 4th ***d i m e n s i o n***');
    }
  }

//Changes the Rich Presence
  if (devcommand === 'rpc') {
    syncStats()
    var game = args.slice(0).join(" ");
    if (message.author.id === package.ownerID) {

      //reset devcommand
      if (game === 'reset') {
        client.user.setActivity(packageJSON.homepage + '// Serving ' + client.users.size + ' clients');
        message.channel.send('***Rich Presence has been Reset***');
      } 
      if (game === 'refresh') {
        client.user.setActivity(packageJSON.homepage + "// Serving " + client.users.size + " clients");
        message.channel.send("***Rich Presence has been Refreshed***")
      } else {
        client.user.setActivity(game + ' // ' + packageJSON.homepage + '// Serving ' + client.users.size + ' clients');
        message.channel.send('***Rich Presence has been updated to:*** \n' + "`" + game + "`");
      }
    }
    else{
      message.reply('You do not have permissions to use this developer command.');
    }
  }

//Executes *nix Shell Commands as the user that the bot was ran under
//Please do not run as root <3
  if (devcommand === "shell") {
    syncStats()
    let script = args.slice(0).join(' ');

    if (message.author.id === package.ownerID) {
      const util = require('util');
      const exec = util.promisify(require('child_process').exec);
      const { stdout, stderr } = await exec(script);
      let evalEmbed = new Discord.RichEmbed()
        .setColor('#0099ff')
        .setTitle('Shell Execute Output')
        .setTimestamp()
        .setDescription('**Shell Output:**\n' && stdout && '\n\n**Shell Errors:**\n' && stderr);
      setTimeout(function() { message.channel.send(evalEmbed) }, 5000);
    }
  }

//Creates Invite from the ServerID given.
//Only if the bot is in that server.
  if (devcommand === "createinvitefromid") {
    if (message.author.id === package.ownerID){
        let guildid = args.slice(0).join(' ');
        let guild = client.guilds.get(guildid);
        if (!guild) return message.reply("The bot isn't in the guild with this ID.");

        guild.fetchInvites()
            .then(invites => message.channel.send('Found Invites:\nhttps://discord.gg/' + invites.map(invite => invite.code).join('\n')))
            .catch(console.error);
    }
  }

//Get all server invites 
  if (devcommand === "getallserverinvite") {
    if (message.author.id === package.ownerID){
      var invites = ["I am required else it won't work"], ct = 0;
      client.guilds.forEach(g => {
        g.fetchInvites().then(guildInvites => {
          invites[invites.length + 1] = (g + " - `Invites: " + guildInvites.array().join(", ") + "`");
          ct++;

          if(ct >= client.guilds.size) {
            for(let i = 0; i < invites.length; i++) {
              if(invites[i] == undefined) invites.splice(i, 1);
            }
            invites.shift();

            for(let i = 0; i < invites.length; i++) invites[i] = "- " + invites[i];
            invites = invites.join("\n\n");

            let embed = new Discord.RichEmbed()
              .setTitle("All Invites:")
              .setDescription(invites);
              message.channel.send(embed);
          }
        }).catch(err => {
            ct++;
        });
      }); 
    } else {
      message.reply("this command can only be used by a developer.");
    }
  }

});


client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix.default) !== 0) return;
    const args = message.content.slice(prefix.default.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

  //Basic ping command
  if (command === "ping") {
    syncStats()
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. \nAPI Latency is ${Math.round(client.ping)}ms`);
    signal.command("A user executed s!ping");
  }

  //Basic commands
  if (command === "invite") {
    syncStats()
      message.reply("Take me to your leader!\n http://seedbot.jyles.club/invite");
      message.channel.send({embed: {
        color: 329514,
        author: {name:'s!invite'},
        fields: [{
          name: 'Bot Invite Link',
          value: 'Take me to your leader!\nhttp://seedbot.jyles.club/invite'
        }],
        timestamp: 'Command Requested at ' + new Date(),
        footer: {
          text: 'Requested by ' + message.author.username
        }
      }});
  }  
  if (command === "help") {
    syncStats()
    message.channel.send({embed: {
      color: 329514,
      author: {name:'s!help'},
      fields: [{
        name: 'Help Description',
        value: 'The Command Dictionary have been *permanently* moved to ***http://seedbot.jyles.club/#commands***'
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }});
  }
  if (command === "support") {
    syncStats()
    message.channel.send({embed: {
      color: 329514,
      author: {name: 's!support'},
      fields: [{
        name: 'Bot Support',
        value: 'If you need help with the bot join our discord `http://seedbot.jyles.club/invite`\n Or you can email us at `contact@dariox.club`'
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }});
  }
  if (command === "patreon") {
    syncStats()
    message.channel.send({embed: {
      color: 329514,
      author: {name: 's!patreon'},
      fields: [{
        name: 'Patreon',
        value: "It's not free to run a discord bot and since more people are starting to use SeedBot I made a patreon page \n so people can give me money to run my discord bot so it can handle more people at once (which is what it is struggling at), also so when we get more money I can hire someone to make modules for the bot and in the future make a dashboard so you have a better experience.\n\n If you want all of these good things that other bots have then Donate to our patreon page at:\n https://patreon.com/jyles_coadward",
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }});
  }
  if (command === "info") {
    syncStats()
    message.channel.send({embed: {
      color: 124517,
      fields: [{
        name: 'SeedBot Info',
        value: "Version: " + package.version + "\nBuild: " + package.build + "\nBranch: " + package.branch + "\nOwner ID: " + package.ownerID + "\nBot Filename: " + package.main
      }],
      timestamp: 'Command Requested at ' + new Date(),
      footer: {
        text: 'Requested by ' + message.author.username
      }
    }})
  }

//Moderation commands ___________________________________________________________________________

        //Kick Command
  if (command === 'kick') {
    syncStats()
    let reason = args.slice(1).join(' ');
    let userToKick = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'logs');
    if (reason.length < 1) return message.reply('You must supply a reason for the kick.');
    if (message.mentions.userToKick.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
  
    if (!message.guild.member(userToKick).kickable && message.author.id !== "230485481773596672") return message.reply('I cannot kick that member');
    message.guild.member(userToKick).kick();

    kickedUserID = userToKick.id();

    message.channel.send({embed: {
      color: 770000,
      author: {name:'Kicked User'},
      fields: [{
        name: 'Reason // ' + user + ' has been Kicked',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Kicked at ' + new Date(),
      footer: {
        text: 'Kicked by ' + message.author.username,
      }
    }});
    client.channels.get(userToKick).send({embed: {
      color: 770000,
      author: {name:'Kicked User'},
      fields: [{
        name: 'Reason // ' + user + ' Kicked',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Kicked at ' + new Date(),
      footer: {
        text: 'Kicked by ' + message.author.username,
      }
    }});
  }

        //Ban Command
  if (command === 'ban') {
    syncStats()
    let reason = args.slice(1).join(' ');
    let userToBan = message.mentions.users.first();
    let logchannel = message.guild.channels.find('name', 'logs');
    if (!message.member.hasPermission("BAN_MEMBERS") || message.author.id !== "230485481773596672") return message.reply(":no_entry_sign: **Error:** You don't have the **Ban Members** permission!");
    if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
    if (message.mentions.userToBan.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);
  
    if (!message.guild.member(userToBan).bannable) return message.reply(`<:redTick:${settings.redTick}> I cannot ban that member`);
    message.guild.member(userToBan).ban();

    bannedUserID = userToBan.id();

    message.channel.send({embed: {
      color: 770000,
      author: {name:'Banned User'},
      fields: [{
        name: 'Reason // ' + user + ' has been Banned',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Banned at ' + new Date(),
      footer: {
        text: 'Banned by ' + message.author.username,
      }
    }})
    client.channels.get(bannedUserID).send({embed: {
      color: 770000,
      author: {name:'Banned User'},
      fields: [{
        name: 'Reason // ' + user + ' Banned',
        value: 'Reason:\n ' + reason
      }],
      timestamp: 'Banned at ' + new Date(),
      footer: {
        text: 'Banned by ' + message.author.username,
      }
    }})
  }

  //Fun Commands! >w<
    if (command === 'rps') {
    syncStats()
      let choice = args.join(" ").toLowerCase();
      message.channel.send(require('./modules/fun/rps.js').cmd(choice));
    }
    if (command === 'punch') {
    syncStats()
      let user = message.mentions.users.first()
      if(user.id !== package.ownerID){
          message.reply('You have punched <@' + user.id + '>')
      } else {
          message.reply("you can't hurt him you pleblord.")
      }
    }
    if (command === 'avatar') {
    syncStats()
      let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL : message.author.avatarURL;
      if (message.mentions.users.size > 0) {
          message.channel.send(`Avatar for, **${message.mentions.users.first().username}:**\n${avatar}`);
      } else {
        message.channel.send(`Avatar for, **${message.author.username}:**\n${avatar}`);
      }
    }
    if (command === 'hammer') {
      syncStats()
      let user = message.mentions.users.first();
      if (message.mentions.users.first() < 1){ return message.reply('You can\'t throw a hammer at the wall silly, ping someone after the command.')}
      message.channel.send(`${message.author.username} threw a sledge hammer at ${message.mentions.users.first().username}. :hammer: `)
    }
    if (command === 'ppsize') {
      syncStats()
      //message.channel.send(require('./modules/fun/ppsize.js').cmd());   
      message.channel.send(require('./modules/error.js').disabled(command, message.author.username));
    }
    if (command === 'magic8ball') {
      syncStats()
      message.reply(require('./modules/fun/8ball.js').cmd());

    }
    if (command === "asciify") {
      syncStats()
      let text = args.slice(0).join(' '); message.channel.send(require('./modules/fun/asciify/main.js').cmd(text));

    }
    if (command === "copypasta") {
      syncStats(); 
       message.channel.send(require('./modules/fun/copypasta.js').cmd());
    }




  //DMOJ Plugin (minified)
  const problems = require('./modules/dmoj/problem.js');const contests = require('./modules/dmoj/contest.js');const users = require('./modules/dmoj/user.js');
  if(command==='problem'){if(args.length===2&&args[1]==='-l'){problems.get(args[0],!0,message)}else{problems.get(args[0],!1,message)}};if(command==='contest'){if(args.length===2&&args[1]==='-l'){contests.get(args[0],!0,message)}else{contests.get(args[0],!1,message)}};if(command==='user'){if(args.length===2&&args[1]==='-l'){users.get(args[0],!0,message)}else{users.get(args[0],!1,message)}};if(command==='search'){message.reply('Working on it...').then(message=>{message.delete(5000)});if(args.length===2&&args[1]==='-l'){problems.search(args[0],!0,message)}else{problems.search(args[0],!1,message)}};if(command==='contest-search'){message.reply('Working on it...').then(message=>{message.delete(5000)});if(args.length===2&&args[1]==='-l'){contests.search(args[0],!0,message)}else{contests.search(args[0],!1,message)}};if(command==='user-search'){message.reply('Working on it...').then(message=>{message.delete(5000)});if(args.length===2&&args[1]==='-l'){users.search(args[0],!0,message)}else{users.search(args[0],!1,message)}};

  
});

























client.on("ready", () => {
  syncStats()
    signal.info('Bot started at ' + new Date())
    signal.info(`Bot has started, with ` + client.users.size + ` users, in ` + client.channels.size + ` channels of ` + client.guilds.size + ` guilds.`);

    client.user.setActivity(`with the logs // ` + client.users.size + ` Users. // v` + ver);
});
client.login(config.token);

const music = require('discord.js-musicbot-addon');
music.start(client, {
  youtubeKey:config.ytapi,
  cooldown:{
    disabled:false,
    timer:10
  },
  botPrefix: prefix.music,
  anyoneCanSkip: false,
  anyoneCanAdjust: true,
  inlineEmbeds: false,
  logging: false
});


