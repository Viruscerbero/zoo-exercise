import { Animal } from "./index.js";
import imgUrl from "../assets/full-side-only-black-cow-silhouette.svg";

export function Cow() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Cow)) {
    return new Cow();
  }

  this.name = "Cow";

  this.sound = "moo";

  this.image = imgUrl;

  Animal.call(this);
}

Cow.prototype = Object.create(Animal.prototype);

Object.defineProperty(Cow.prototype, "constructor", {
  value: Cow,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
