class node {
  constructor() {
    this.myData = null;
    this.myLeft = null;
    this.myRight = null;
  }
  get data() {
    return this.myData;
  }
  set data(data) {
    this.myData = data;
  }
  get right() {
    return this.myRight;
  }
  set right(newRight) {
    this.myRight = newRight;
  }
  get left() {
    return this.myLeft;
  }
  set left(newLeft) {
    this.myLeft = newLeft;
  }
}
module.exports = node;
