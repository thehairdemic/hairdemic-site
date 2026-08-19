import "./globals.css";

export const metadata = {
  title: "My Hairdemic",
  description: "Hairdemic digital ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
