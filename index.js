class SortedList {
  
  constructor() {
    this.items = [];
    this.length = this.items.length;

  }

  add(item) {
    this.items.push(item);
    this.items.sort(function (a,b){
      return a -b ;
    });
    return this.items
  }

  get(pos) {
   items.at(pos);
  }

  max() {
   return this.items.max()
  }

  min() {
    return this.items.min()
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
