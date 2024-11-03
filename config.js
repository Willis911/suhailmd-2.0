const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "254702365210,254786273945";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "null" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_49_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNTksXG4gICAgICAgIDEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDg3LFxuICAgICAgICAzMixcbiAgICAgICAgMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxODUsXG4gICAgICAgIDc0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODksXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM5LFxuICAgICAgICAzNixcbiAgICAgICAgOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0LFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0LFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NixcbiAgICAgICAgOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDUyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExNixcbiAgICAgICAgNjEsXG4gICAgICAgIDkyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTcyLFxuICAgICAgICAzOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzOCxcbiAgICAgICAgODIsXG4gICAgICAgIDgyLFxuICAgICAgICA3NixcbiAgICAgICAgNzcsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0NixcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg1LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA4N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDYzLFxuICAgICAgICA0OCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDkyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDIsXG4gICAgICAgIDYxLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjA0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNjcsXG4gICAgICAgIDU4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDExOSxcbiAgICAgICAgN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiM3RYaEphRFlSeFNpTVp2aHdpVk9tMGFYZ3llR2NSTmUrK0xLL01mY3h3QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDgzMzY0NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkM0Q0E4MEVENUM3RUVERkE0NTA5RkIyOEY5Q0M2NjZFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDYwNTc0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJITUhsaS1PRFFUYUhJamEyeTFueDVRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI3ZmY3NTQzLWE0NTMtNDgxNC05ZGU5LTQ0OGZjZTI2ZGI3YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4NyxcbiAgICAgIDE3NSxcbiAgICAgIDEwMCxcbiAgICAgIDIzNSxcbiAgICAgIDEwMixcbiAgICAgIDE0NCxcbiAgICAgIDE3NSxcbiAgICAgIDIwMCxcbiAgICAgIDE1MSxcbiAgICAgIDEwNixcbiAgICAgIDExNCxcbiAgICAgIDEyMyxcbiAgICAgIDkyLFxuICAgICAgMjQyLFxuICAgICAgMjUsXG4gICAgICAxMDYsXG4gICAgICAzMixcbiAgICAgIDAsXG4gICAgICA3LFxuICAgICAgOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgMTc4LFxuICAgICAgNTksXG4gICAgICAyNixcbiAgICAgIDM1LFxuICAgICAgMTQzLFxuICAgICAgMTgxLFxuICAgICAgMTI5LFxuICAgICAgOTcsXG4gICAgICA1MCxcbiAgICAgIDYzLFxuICAgICAgMTQsXG4gICAgICAxNDksXG4gICAgICA3NyxcbiAgICAgIDIzNixcbiAgICAgIDU2LFxuICAgICAgMjQ2LFxuICAgICAgMjAxLFxuICAgICAgNTEsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWlFFN0RDTVlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcwODMzNjQ0ODozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlRyYWNlV2lsbFwiLFxuICAgIFwibGlkXCI6IFwiMTk5NDIwNTMzMDIzMTc6MzJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXpudE9JRkVLemxtN2tHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJCb1dXS3IwSVRQZmtyNkZyUWRiMnVjcmg5M2dCTkN5aEFVQkt3TndoK0VBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImVJYTFxSDkwaTY4Yk5sK09vRllUL2czZTFJb2M4Y1NUSjJOWWNZYk5rL2hEa2IxaS9MWGx1RGhDaEY1Y3FwNjYyNit5Z05lNE9vemtoNS9sVzU4ZkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjk3bkZmN3Q0ZDNtU1ROUm5EZ3hEVXBheUdQaTlmNmVyR1Yyc2s5VHBwU3ZCamZDalZ4RHlRTWFiMUVVc1VycjA1SUxaZ01MaWhMdW1tdEJQTDN4RkFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwODMzNjQ0ODozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2MDU3NDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJcUdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlxRy5qc29uIjogIntcImtleURhdGFcIjpcImlhUUE4dGV0RDhMRkREREpDU3BzRWRyUHRvc04vdGN1MFphZTkvcW44Zm89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU0ODU2MzMzNixcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "3", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "ADAM"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "3",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
