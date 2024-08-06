import { Animal } from "./index.js";
import imgURL from "../assets/full-side-only-black-fox-silhouette.svg";

export function Fox() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Fox)) {
    return new Fox();
  }

  this.name = "Fox";

  this.sound = "bark";

  this.image = imgURL;

  Animal.call(this);
}

Fox.prototype = Object.create(Animal.prototype);

Object.defineProperty(Fox.prototype, "constructor", {
  value: Fox,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
