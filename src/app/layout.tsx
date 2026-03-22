import Header from "@/components/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";
import { Nunito_Sans } from "next/font/google";
import "./global.css";

export const metadata = {
  title: "Rest Countries",
  description: "REST Countries API",
};

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body suppressHydrationWarning>
        <ThemeContextProvider>
          <Header />
          {children}
        </ThemeContextProvider>
      </body>
    </html>
  );
}
