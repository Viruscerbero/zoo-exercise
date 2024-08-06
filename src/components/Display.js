function Display({ tag, watch, prop }) {
  let value = watch[prop];

  Object.defineProperty(watch, prop, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue !== value) {
        const oldValue = value;
        value = newValue;
        tag.innerHTML = `<h2>${newValue}</h2>`;
      }
    },
  });
}

export { Display };
