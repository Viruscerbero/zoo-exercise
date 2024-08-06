import { Animal } from "./index.js";
import imgURL from "../assets/full-side-only-black-sheep-silhouette.svg";

export function Sheep() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Sheep)) {
    return new Sheep();
  }

  this.name = "Sheep";

  this.sound = "baa";

  this.image = imgURL;

  Animal.call(this);
}

Sheep.prototype = Object.create(Animal.prototype);

Object.defineProperty(Sheep.prototype, "constructor", {
  value: Sheep,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
