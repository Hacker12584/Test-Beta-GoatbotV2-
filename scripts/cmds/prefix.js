module.exports = {
 config: {
	 name: "prefix",
	 version: "1.0",
	 author: "Tokodori_Frtiz",//remodified by cliff
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "auto 🪐",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "prefix") {
 return message.reply({
 body: `
🌐 System prefix: +
🛸 Your box chat prefix: +\n\nGilgameshV1.1\nBot Developer: Aljur Pogoy 🗡️`,
 attachment: await global.utils.getStreamFromURL('https://imgur.com/a/OcdkVg0")
 });
 }
 }
}
