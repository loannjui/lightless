import { generatePalette, isHexCode } from "./modules/util";
import Color from "./modules/Color";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf();
const form = document.querySelector("form");

const handleForm = (e) => {
  try {
    e.preventDefault();
    const inputValue = e.target.firstElementChild.value;
    if (!isHexCode(inputValue)) {
      throw new Error("Veuillez entrer un hexcode valide.");
    }
    const palette = generatePalette(inputValue);
    notyf.success(`copied ${color} to clipboard`);
  } catch (err) {
    notyf.error(err.message);
  }
};

form.addEventListener("submit", handleForm);

const containerElement = document.querySelector("main");
const color = new Color([0, 0, 0]);
color.display(containerElement);

const displayColors = (palette) => {
  const header = document.querySelector("header");
  header.classList.add("minimized");
  const colorContainer = document.querySelector("main");
  colorContainer.innerHTML = "";
  const gradientColors = [
    0,
    Math.round(palette.length / 2),
    palette.length - 1,
  ].map((index) => `#${convert.hsl.hex(palette[index])}`);

  document.body.style.background = `linear-gradient(-45deg, ${gradientColors.join(",")}`;
  document.body.style.backgroundSize = `400% 400%`;
  document.documentElement.style.setProperty(
    "--shadow-color",
    hexToCSSHSL(input),
  );
};

const colorContainer = document.querySelector("main");
const handleMain = async (e) => {
  const color = e.target.closest(".color").dataset.color;
  await navigator.clipboard.writeText(color);
};
colorContainer.addEventListener("click", handleMain);
