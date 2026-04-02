import { Inter, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300", "400", "500", "600", "700", "800"] });
const playfair = Playfair_Display({ subsets: ["latin"], style: ['italic', 'normal'], variable: "--font-playfair", weight: ["400"] });

export const metadata = {
  title: "WHYS | Creative Design Digital Studio",
  description: "Our studio is dedicated to crafting visually stunning and engaging digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased font-sans min-h-screen selection:bg-white selection:text-black overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
