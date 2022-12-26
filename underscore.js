import { _ } from 'underscore';
const arr = [1, 2, 3, 4, 5]

console.log(arr[0]); // 1 출력
console.log(_.first(arr)); // 1 출력
console.log(arr[arr.length-1]); // 5 출력
console.log(_.last(arr)); // 5 출력