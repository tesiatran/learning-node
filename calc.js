
function doMath(num1, operator, num2){
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch(operator){
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
      break;
    case "/":
      return num1 / num2;
      break;
  }
}

// console.log(process.argv);

var num1 = process.argv[2];
var num2 = process.argv[4];
var operator = process.argv[3];

console.log(doMath(num1, operator, num2));
