import convert from "color-convert";
export const generatePalette = (hex) => {
  const colors = [];
  console.log(hex);

  const [h, s] = convert.hex.hsl(hex);
  const interval = 5;
  for (let l = 0; l < 100; l += interval) {
    colors.push([h, s, l]);
  }
  return colors;
};
export const isHexCode = (input) => {
   return /^#[0-9A-F]{6}$/i.test(input);
}

export const convertHexToCssHsl = (hex) => {
    const hsl = convert.hex.hsl(hex);
    return `${hsl[0]}deg ${hsl[1]}% ${hsl[2]}%`;
};