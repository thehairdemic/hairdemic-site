import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hairdemic",
  description:
    "Quality hair care and positive hair experiences should be accessible for everyone.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
