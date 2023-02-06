function sum(...numbers) {
    // let count = 0;
    // for(let number of numbers){
    //     count += number;
    // }
    // return count;
    return numbers.reduce((sum, n) => sum + n, 0);
  }
  module.exports = sum;