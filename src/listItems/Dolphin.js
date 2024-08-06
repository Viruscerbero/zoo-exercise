import { Animal } from "./index.js";
import imgURL from "../assets/full-side-only-black-dolphin-silhouette.svg";

export function Dolphin() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Dolphin)) {
    return new Dolphin();
  }

  this.name = "Dolphin";

  this.sound = "click";

  this.image = imgURL;

  Animal.call(this);
}

Dolphin.prototype = Object.create(Animal.prototype);

Object.defineProperty(Dolphin.prototype, "constructor", {
  value: Dolphin,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
