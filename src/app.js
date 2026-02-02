import convert from 'color-convert';
const generatePalette = (hexCode) => {
    const hslColor = convert.hex.hsl(hexCode);
    console.log(hslColor)
}

window.generatePalette = generatePalette;