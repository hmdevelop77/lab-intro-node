class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a, b) {
      return a - b;
    });
    this.length++;
  }

  get(pos) {
    if (pos > this.items.length) {
      return OutOfBounds;
    } else {
      return this.items[pos];
    }
  }

  max() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
    return Math.max(...this.items);  
    }
    
  }

  min() {
    if(this.length === 0){
      throw new Error('EmptySortedList');
    }else{
     return Math.min(...this.items);  
    }
   
  }

  sum() {
    let count = 0;
    for (i = 0; i < this.length; i++) {
      count += this.items[i];
    }
    return count;
  }

  avg() {}
}

module.exports = SortedList;
