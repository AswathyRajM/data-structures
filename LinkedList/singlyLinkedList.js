class Node {
  constructor(data) {
    this.data = data;
    this.nextL = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(data) {
    var newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
    } else {
      this.tail.nextL = newNode;
    }
    this.tail = newNode;
  }

  addAt(data, position) {
    var newNode = new Node(data);
    if (position < 0) {
      console.log("Enter a valid index");
      return;
    }
    if (position === 0) {
      newNode.nextL = this.head;
      this.head = newNode;
    } else {
      var temp = this.head;
      for (let i = 1; i < position; i++) {
        temp = temp.nextL;
        if (temp == null) {
          console.log("List size: ", i);
          console.log(
            "Index doesnt exist. Adding the node at the end of the list.."
          );
          this.add(data);
          return;
        }
      }
      newNode.nextL = temp.nextL;
      temp.nextL = newNode;
    }
  }

  print() {
    var temp = this.head;
    var str = "";
    while (temp) {
      str += temp.data + " ";
      temp = temp.nextL;
    }
    console.log(str);
  }
}

var list = new LinkedList();
list.add(100);
list.add(200);
list.add(300);
list.add(400);
list.add(500);
list.add(600);
list.addAt(700, -3);
list.print();
