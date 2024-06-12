const fs = require("fs");

module.exports.config = {
		name: "prefix2",
		version: "1.0.1",
		role: 0,
		credits: "cliff",
		description: "Display the prefix of your bot",
		hasPrefix: false,
		usages: "prefix",
		cooldown: 5,
		aliases: ["prefix", "Prefix", "PREFIX", "prefi"],
};

module.exports.run = function ({ api, event, prefix, admin }) {
		const { threadID, messageID } = event;

		if (event.body.toLowerCase() === `${prefix}prefix`) {
				api.sendMessage(
						"This command cannot be executed manually.",
						threadID,
						messageID
				);
				return;
		}

		api.sendMessage(
				{
						body: `𝚊𝚜𝚜𝚒𝚜𝚝 𝚋𝚘𝚝\n_______________\n🟩⬜🟩𝑏𝑜𝑡 𝑝𝑟𝑒𝑓𝑖𝑥:[ 𓆩 ${prefix} 𓆪 ]\n\n𝗦𝗢𝗠𝗘 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 𝗧𝗛𝗔𝗧 𝗠𝗔𝗬 𝗛𝗘𝗟𝗣 𝗬𝗢𝗨:\n➥ ${prefix}help [number of page] -> see commands\n➥ ${prefix}sim [message] -> talk to bot\n➥ ${prefix}callad [message] -> report any problem encountered\n➥ ${prefix}help [command] -> information and usage of command\n\nHave fun using it, enjoy! ❤️\nBot Developer: https://www.facebook.com/gerald.max.beast`
				},
				threadID,
				(err, messageInfo) => {
						if (err) return console.error(err);
						api.setMessageReaction("🚀", messageInfo.messageID, (err) => {}, true);
				}
		);
};
