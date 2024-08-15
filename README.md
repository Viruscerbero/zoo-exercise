# Digital Zoo

This project implements a virtual zoo using prototypal inheritance in JavaScript. Each animal species has unique behaviors but shares a common "speak" functionality.

## Concept

The zoo houses various animal species, each exhibiting unique behaviors. However, all animals share the ability to communicate. This communication is implemented through a speak method that inserts a species-specific "sound" within the provided string.

## Design and Benefits of Prototypal Inheritance

Animals are not defined using classes, but rather through prototypal inheritance. This allows for:

**Flexibility:** It allows for more dynamic object creation and modification at runtime.

**Code reusability:** Shared behaviors are defined in the base prototype, promoting code reuse.

**Specialization:** Individual animal species (e.g., Lion, Tiger, Fox, etc.) inherit from the base Animal and customize the sound used in the speak method.

**Lightweight:** Prototypes are simpler than classes and can improve memory efficiency.

## Screenshots

![zoo-exercise](https://github.com/user-attachments/assets/c8867e7d-d758-482d-88c4-913aab91c50d)
