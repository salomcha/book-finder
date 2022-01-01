import bot from "../core/bot";

bot.command("developer", async (ctx) => {
    let text = "👨‍💻 @software_engeneer";
    await ctx.reply(text);
});