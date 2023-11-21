import "./global.css";
import Header from "@/components/Header";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "URmovies | Home",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "mui-theme" }}>
          <Header />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  );
}
