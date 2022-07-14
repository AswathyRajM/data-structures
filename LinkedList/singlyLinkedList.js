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
    if (newNode.nextL == null) {
      this.tail = newNode;
    }
  }

  delete() {
    this.head = null;
    this.tail = null;
    console.log("Removed all nodes..");
  }

  removeAt(position) {
    if (this.head == null) {
      console.log("List is empty!");
      return;
    } else if (this.head.nextL == null) {
      this.head = null;
      this.tail = null;
      return;
    }
    if (position < 0) {
      console.log("Enter a valid index");
      return;
    }

    var temp = this.head.nextL;
    var it = this.head;
    if (position == 0) {
      this.head = temp;
      return;
    }
    for (let i = 1; i < position; i++) {
      temp = temp.nextL;
      if (temp == null) {
        console.log("Enter a valid index");
        return;
      }
      it = it.nextL;
      if (it == null) {
        console.log("Enter a valid index");
        return;
      }
    }
    it.nextL = temp.nextL;
    if (it.nextL == null) this.tail = it;
  }

  removeData(data) {
    if (this.head == null) {
      console.log("List is empty!");
      return;
    } else if (this.head.data == data) {
      this.head = this.head.nextL;
      if (this.head.nextL == null) this.tail = this.head;
      return;
    }
    if (data == null || data == undefined) {
      console.log("Invalid data");
      return;
    }
    var temp = this.head.nextL;
    var it = this.head;
    var flag = false;
    while (temp) {
      if (temp.data == data) {
        it.nextL = temp.nextL;
        flag = true;
      }
      if (it.nextL == null) {
        this.tail = it;
      }
      temp = temp.nextL;
      it = it.nextL;
    }
    if (flag == false) {
      console.log("Data not found!");
    }
  }

  search(data) {
    var temp = this.head;
    var pos = 0;
    var found = "Element not found!";
    while (temp) {
      if (temp.data == data) {
        found = "Element found at position: " + pos;
      }
      temp = temp.nextL;
      pos++;
    }

    console.log(found);
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
list.addAt(700, 6);
list.removeAt(0);
list.removeData(200);
list.search(600);
list.print();
list.delete();
