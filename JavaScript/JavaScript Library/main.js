let _ = {
  map: (array, callback) => {
      for (let i = 0; i < array.length; i++) {
          array[i] = callback(array[i]);
      }
      return array;
  },
  reduce: (array, callback, memo) => {
      let el = 0;
      if (!memo) {
          memo = array[0];
          el = 1;
      }
      for (let i = el; i < array.length; i++) {
          memo = callback(array[i], memo);
      }
      return memo;
  },
  find: (array, callback) => {
      for (let item of array) {
          if (callback(item)){
              return item;
          }
      }
  },
  filter: (array, callback) => {
    let newArr =[];
    for (let item of array) {
        if (callback(item)){
            newArr.push(item);
        }
    }
    return newArr;
  },
  reject: (array, callback) => {
    let newArr =[];
    for (let item of array) {
        if (!callback(item)){
            newArr.push(item);
        }
    }
    return newArr;
  }
}

let array = [1,2,3,4,5]
let map = _.map(array, x => x * 5);
console.log(map);
// console.log(_.reduce(array, (x, memo) => x + memo));
console.log(_.find(array, x => x == 15));
console.log(_.filter(array, x => x > 15));
console.log(_.reject(array, x => x > 15));
