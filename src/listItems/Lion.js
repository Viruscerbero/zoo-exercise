import { Animal } from "./index.js";
import imgURL from "../assets/full-side-only-black-lion-silhouette.svg";

export function Lion() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Lion)) {
    return new Lion();
  }

  this.name = "Lion";

  this.sound = "roar";

  this.image = imgURL;

  Animal.call(this);
}

Lion.prototype = Object.create(Animal.prototype);

Object.defineProperty(Lion.prototype, "constructor", {
  value: Lion,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
