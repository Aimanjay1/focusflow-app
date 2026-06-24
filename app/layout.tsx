import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FocusFlow",
  description: "Your ultimate productivity companion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex" suppressHydrationWarning>
        <aside
          className="w-64 min-h-screen flex flex-col gap-6 p-4
                   bg-surface-container text-on-surface
                   border-r border-outline-variant"
        >
          <header>
            <h1 className="text-headline-sm">FocusFlow</h1>
            <p className="text-body-sm text-on-surface-variant">Profile</p>
          </header>

          {/* Nav */}
          <nav className="flex flex-col gap-1">
            <p>Dashboard</p>
            <p>Priority Matrix</p>
            <p>Work</p>
            <p>Study</p>
            <p>History</p>
          </nav>

          {/* Footer */}
          <footer className="mt-auto text-label-md text-on-surface-variant">
            © 2026 FocusFlow
          </footer>
        </aside>
        <main>{children}</main>
      </body>
    </html>
  );
}
