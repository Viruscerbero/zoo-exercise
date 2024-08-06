export function Animal() {
  if (!this || this.constructor === "Animal") {
    throw new Error("Error. 'Animal': cannot instatiate an abstract class.");
  }

  if (!this.sound) {
    throw new Error(
      `Error. ${this.constructor.name}: does not have a sound property defined.`
    );
  }
}

Animal.prototype.speak = function (words) {
  words = words.split(" ");

  words = words.map((word) => `${word} ${this.sound}`);

  return words.join(" ");
};
