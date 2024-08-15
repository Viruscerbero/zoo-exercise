import "./normalize.css";
import "./style.css";
import { List, Button, InputText, Display } from "./components/index.js";

let app = document.querySelector("#app");
app.className = "app";
app.innerHTML = `
    <header>
      <h1>Digital Zoo</h1>
    </header>
    <main>
      <h3>Pick an animal and make it speak!</h3>
      <div id="list" class="list"></div>
      <input id="prompt" type="text" name="prompt" class="input" />
      <button id="speak" class="button">Speak!</button>
      <div id="display" class="display"></div>
    </main>
    <footer></footer>
`;

let words = "";

const display = {
  content: "",
};

let selectedAnimal = null;

function selectAnimal(animal) {
  selectedAnimal = animal;
}

function setPrompt(prompt) {
  words = prompt;
}

function speak() {
  display.content = selectedAnimal.speak(words);
}

List({ tag: document.querySelector("#list"), onSelect: selectAnimal });

InputText({
  tag: document.querySelector("#prompt"),
  placeholder: "what does it say?",
  onChange: setPrompt,
});

Button({
  tag: document.querySelector("#speak"),
  onClick: speak,
});

Display({
  tag: document.querySelector("#display"),
  watch: display,
  prop: "content",
});
