import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automated Invoice Processing System",
  description: "A cloud-based application that automates the processing of invoices for large enterprises, utilizing RPA to extract data, validate invoices, and route them for approval.",
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
