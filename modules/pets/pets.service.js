const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    let newPets = {
      cat: pets.cats.all(),
      dog: pets.dogs.all(),
    };
    return newPets;
  },

  getDog() {
    return pets.dogs.show();
  },

  getCat() {
    return pets.cats.show();
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (type === "cat") {
      return pets.cats.dequeue();
    }
    if (type === "dog") {
      return pets.dogs.dequeue();
    }
  },
};
