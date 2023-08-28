import "../global.css";
import { Poppins } from "next/font/google";

const Poppins_Font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`dark ${Poppins_Font.className}`}>
      <head>
        <title></title>
      </head>
      <body>
        <main className=" dark:bg-stone-950 dark:text-white h-screen">
          {props.children}
        </main>
      </body>
    </html>
  );
}
