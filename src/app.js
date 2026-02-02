import { generatePalette, isHexCode } from "./modules/util";

const form = document.querySelector("form");

const handleForm = (e) => {
  try {
    e.preventDefault();
    const inputValue = e.target.firstElementChild.value;
    if (!isHexCode(inputValue)) {
      throw new Error("Veuillez entrer un hexcode valide.");
    }
    const palette = generatePalette(inputValue);
    console.log(palette, inputValue);
  } catch (err) {
    console.error(err);
  }
};

form.addEventListener("submit", handleForm);
