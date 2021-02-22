class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;
    return temp.val;
  }

  show() {
    if (!this.first) return null;
    const temp = this.first;
    return temp.val;
  }

  all() {
    if (!this.first) return null;

    let tempArr = [];
    let temp = this.first;

    while (temp) {
      tempArr.push(temp.val);
      temp = temp.next;
    }
    return tempArr.join(",");
  }
}

module.exports = Queue;
