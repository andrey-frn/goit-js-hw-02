let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите любое число");
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз!");
  }
  numbers.push(input);
} while (input !== null);
numbers.pop();

for (let number of numbers) {
  total += +number;
}
console.log(`Общая сумма чисел равна ${total}`);
