module.exports = async function({ args, reply }) {
  if (!args[0]) return reply("❌ Provide number to unban.\nExample: `.unban 923xxx`");

  const num = args[0].replace(/\D/g, "");
  reply(`✅ *Unbanned (fake):* ${num}\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓`);
};