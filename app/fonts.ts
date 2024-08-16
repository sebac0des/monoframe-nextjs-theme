import { Poppins, Inconsolata } from "next/font/google";

export const primary = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const secondary = Inconsolata({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
});

export const auxiliary = undefined //Define your alternative font here
