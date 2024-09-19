function calculate(num1, num2, operation) {
  switch (operation) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Ошибка: деление на ноль";
      } else {
        return num1 / num2;
      }
    default:
      return "Ошибка: некорректный оператор";
  }
}
console.log(calculate(10, 5, "+")); 
console.log(calculate(10, 5, "-")); 
console.log(calculate(10, 5, "*")); 
console.log(calculate(10, 5, "/")); 
console.log(calculate(10, 5, "%")); 
