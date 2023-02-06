function sum(...numbers) {
    let count = 0;
    for(let number of numbers){
        count += number;
    }
    return count;
  }
  module.exports = sum;