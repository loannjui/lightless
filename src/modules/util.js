import * as convert from "color-convert";
export const generatePalette = (hexCode) => {
  const colors = [];
  const [h, s] = convert.hex.hsl(hexCode);
  const interval = 2;
  for (let l = 0; l < 100; l + interval) {
    colors.push[h, s, l];
  }
  return colors;
};
export const isHexCode = (input) => {
   return /^#[0-9A-F]{6}$/i.test(input.value);
}