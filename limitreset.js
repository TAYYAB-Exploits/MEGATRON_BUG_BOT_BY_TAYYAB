module.exports = async function ({ reply }) {
  try {
    let db = global.db; // ya your db loader
    let users = db.users || {};

    let resetCount = 0;
    for (let user in users) {
      if (users[user].limit) {
        users[user].limit = 0;
        resetCount++;
      }
    }

    reply(`♻️ *Limit reset successful!*\n🔁 Users affected: ${resetCount}\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓`);
  } catch (e) {
    console.error("❌ .limitreset error:", e);
    reply("❌ Failed to reset limits.\nCheck logs.\n\n> 𝗧𝗔𝗬𝗬𝗔𝗕 ❦ ✓");
  }
};