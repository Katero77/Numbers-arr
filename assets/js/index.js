
const numbers = [4, -2, 5, 19, -130, 0, 10]
let min = Math.min.apply(null, numbers);
let max = Math.max.apply(null, numbers);

console.log(max);
console.log(min);


var arr = [12, 15, 20, 25, 59, 79];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
  sum += arr[i];

}
var result = sum / arr.length;
alert(result);