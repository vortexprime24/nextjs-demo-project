"use client";

import WebhookButton from "@/components/WebhookButton";
import { AnimatePresence } from "framer-motion";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <main className="min-h-screen bg-gray-100">
        {children}
        <div className="container mx-auto mt-8 text-center">
          <WebhookButton />
        </div>
      </main>
    </AnimatePresence>
  );
}
