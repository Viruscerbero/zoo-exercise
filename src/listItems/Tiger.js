import { Animal } from "./index.js";
import imgURL from "../assets/full-side-only-black-tiger-silhouette.svg";

export function Tiger() {
  /* Scope-Safe Constructor */
  if (!(this instanceof Tiger)) {
    return new Tiger();
  }

  this.name = "Tiger";

  this.sound = "growl";

  this.image = imgURL;

  Animal.call(this);
}

Tiger.prototype = Object.create(Animal.prototype);

Object.defineProperty(Tiger.prototype, "constructor", {
  value: Tiger,
  enumerable: false, // Do not get listed in "for in" loops
  writable: true,
});
