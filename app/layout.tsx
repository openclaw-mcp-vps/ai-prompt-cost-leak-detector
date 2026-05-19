import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Prompt Cost Leak Detector – Find Expensive Prompts Draining Your Budget",
  description: "Analyze AI API usage logs to identify prompts with poor cost/output ratios and get optimization recommendations."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="aa36d9b9-403f-4fa2-bc1d-e1941cd9ac0f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
