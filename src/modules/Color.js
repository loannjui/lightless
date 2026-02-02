import convert from "color-convert";
export default class Color {
  #hsl;
  #hex;
  #element;
  constructor(hslArray) {
    this.#hsl = hslArray;
    this.#hex = `#${convert.hsl.hex(hslArray)}`;
    this.#element = this.#generateElement;
  }
  #generateElement() {
    const colorElement = document.querySelector("div");
    colorElement.classList.add("color");
    colorElement.dataset.color = this.#hex;
    colorElement.style.backgroundColor = this.#hex;
    const pElement = document.querySelector("p");
    pElement.style.color = this.#hsl[2] < 60 ? "#fff" : "#000";
    pElement.textContent = `${this.#hex}`;
    colorElement.insertAdjacentHTML("beforeend", pElement);
    return colorElement;
  }
  display(parentElement){
    parentElement.appendChild(this.#element);
  }
}
