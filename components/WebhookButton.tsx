"use client";

import { useState } from "react";
import sendTestWebhook from "@/actions/webook";

export default function WebhookButton() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      await sendTestWebhook();
      alert("Webhook sent.");
    } catch (error) {
      alert("Failed to send webhook");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 disabled:bg-gray-400"
    >
      {isLoading ? "Sending..." : "Send Test Webhook"}
    </button>
  );
}
