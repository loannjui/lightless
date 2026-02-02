import convert from 'color-convert';
const generatePalette = (hexCode) => {
    hslColor = convert.hex.hsl(hexCode);
    console.log(hslColor)
}