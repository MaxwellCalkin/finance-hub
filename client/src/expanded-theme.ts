//eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

const hello: PaletteColor[] = [];
const goodbye: Palette[] = [];
console.log(hello, goodbye);

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
//hello
