import { Animal } from "./index.js";
import imgURL from "../assets/full-side-only-black-wolf-silhouette.svg";

export function Wolf() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Wolf)) {
    return new Wolf();
  }

  this.name = "Wolf";

  this.sound = "howl";

  this.image = imgURL;

  Animal.call(this);
}

Wolf.prototype = Object.create(Animal.prototype);

Object.defineProperty(Wolf.prototype, "constructor", {
  value: Wolf,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
