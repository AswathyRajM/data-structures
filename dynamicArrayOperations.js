class ArrayOp {
  constructor(arr) {
    this.arr = arr;
    this.arrLength = arr.length;
  }

  add(item) {
    let newArr = new Array(this.arrLength + 1);
    for (let i = 0; i < this.arrLength; i++) {
      newArr[i] = this.arr[i];
    }
    newArr[this.arrLength] = item;
    this.arrLength = newArr.length;
    this.arr = newArr;
    return this.arr;
  }

  appendAt(item, index) {
    let newArr = new Array(this.arrLength + 1);
    for (let i = 0, j = 0; i < this.arrLength + 1; i++, j++) {
      if (i == index) {
        newArr[i] = item;
        j--;
      } else {
        newArr[i] = this.arr[j];
      }
    }
    this.arrLength = newArr.length;
    this.arr = newArr;
    return this.arr;
  }

  deleteArr() {
    this.arr = new Array();
    this.arrLength = this.arr.length;
    return this.arr;
  }

  deleteAt(index) {
    let newArr = new Array(this.arrLength - 1);
    for (let i = 0, j = 0; j < this.arrLength; i++, j++) {
      if (j == index) {
        i--;
      } else {
        newArr[i] = this.arr[j];
      }
    }
    this.arrLength = newArr.length;
    this.arr = newArr;
    return this.arr;
  }

  indexOfArr(item) {
    return this.arr.indexOf(item);
  }

  containsArr(item) {
    if (this.arr.indexOf(item) > 0) return true;
    else return false;
  }
}

let arrObj = new ArrayOp([1, 2, 3, 4, 5], 5);
let returnedArr = arrObj.containsArr(8);
console.log(returnedArr);
