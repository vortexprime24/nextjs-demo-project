"use server";

export default async function sendTestWebhook() {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    throw new Error("Discord webhook URL is not set");
  }

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content: "Test webhook message",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to send webhook");
  }

  return { success: true };
}
