import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Just Art Gallery – Solo para Art Lovers | Se vende Pintura de Arte Moderno en San Pedro Garza García",
  description:
    "Se vende Pintura de Arte Moderno – MXN $350,000 – Entrega en San Pedro Garza García. Solo para Art Lovers. Informes vía WhatsApp: 81 1807 4433.",
  openGraph: {
    title:
      "Just Art Gallery – Se vende Pintura de Arte Moderno (MXN $350,000) en San Pedro Garza García",
    description:
      "Pintura de Arte Moderno en venta. Precio: MXN $350,000. Entrega en San Pedro Garza García. Informes solo por WhatsApp al 81 1807 4433.",
    siteName: "Just Art Gallery",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/1a.jpg",
        width: 1200,
        height: 630,
        alt: "Pintura de Arte Moderno – Just Art Gallery (MXN $350,000)",
      },
      {
        url: "/2a.jpg",
        width: 1200,
        height: 630,
        alt: "Detalle de la obra – Just Art Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Just Art Gallery – Se vende Pintura de Arte Moderno (MXN $350,000)",
    description:
      "Entrega en San Pedro Garza García. Informes por WhatsApp: 81 1807 4433.",
    images: ["/1a.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
