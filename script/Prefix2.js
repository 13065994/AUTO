const fs = require("fs");

module.exports.config = {
		name: "prefix",
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
						body: `ℎ𝑒𝑙𝑙𝑜👋, 👀𝑖 𝑠𝑒𝑒 𝑦𝑜𝑢 𝑤𝑎𝑛𝑡 𝑡𝑜 𝑘𝑛𝑜𝑤 𝑚𝑦 𝑝𝑟𝑒𝑓ix\n𝑐ℎ𝑎𝑡 𝑝𝑟𝑒𝑓𝑖𝑥:${prefix} \n 𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖\n📃 | 𝐻𝑂𝑊 𝑇𝑂 𝑈𝑆𝐸:\n❶ ${prefix} 𝐻𝐸𝐿𝑃\n❷ ${prefix} 𝑈𝑃𝑇𝐼𝑀𝐸\n❸ ${prefix} 𝐶𝐴𝐿𝐿𝐴𝐷\n𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖𝄖\n𝐵𝑂𝑇 : ⎔┨⌜𝙶𝚎𝚛𝚊𝚕𝚍 𝚋𝚘𝚝⌝┠⎔`
				},
				threadID,
				(err, messageInfo) => {
						if (err) return console.error(err);
						api.setMessageReaction("🚀", messageInfo.messageID, (err) => {}, true);
				}
		);
};
