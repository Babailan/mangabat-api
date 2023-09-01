import "../global.css";
import { Noto_Sans_Mono } from "next/font/google";

const Font = Noto_Sans_Mono({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={` ${Font.className}`}>
      <body>
        <main className="dark:bg-stone-900 dark:text-white min-h-screen p-5">
          {props.children}
        </main>
      </body>
    </html>
  );
}
