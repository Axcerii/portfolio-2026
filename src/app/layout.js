import { Croissant_One } from "next/font/google";
import "./globals.css";

const croissantOne = Croissant_One({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hugo Malezet - Portfolio",
  description: "Portfolio du développeur web Hugo Malezet. Passionné, créatif, fan de code, de musique, d'art et de design... et d'Hatsune Miku, quand même.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
