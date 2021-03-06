const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const cats = new Queue();

store.cats.forEach((cat) => cats.enqueue(cat));

// --------------------

module.exports = {
  get() {
    // Return the pets next in line to be adopted.
    return cats.all();
  },

  getCat() {
    return cats.show();
  },

  dequeue() {
    // Remove a pet from the queue.
    cats.dequeue();
    return cats;
  },
};
