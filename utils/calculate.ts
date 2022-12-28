const MAX_LENGTH = 14;

const calculate = (num1: number, num2: number, calc: string) => {
  let result;
  switch (calc) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = result;
  }

  let decimalN = 0;

  if (calc === "+" || calc === "-") {
    if (!Number.isInteger(num1)) {
      var d = String(num1).split(".")[1].length;
      if (decimalN < d) decimalN = d;
    }
    if (!Number.isInteger(num2)) {
      var d = String(num2).split(".")[1].length;
      if (decimalN < d) decimalN = d;
    }
  } else {
    decimalN = 14;
  }

  result = Number(result?.toFixed(decimalN));

  if (Number.isInteger(result)) return Math.ceil(result);

  const resultArr = [...(result + "").split("")];

  let zero = 0;
  for (let i = resultArr.length - 1; i > resultArr.length - decimalN; i--) {
    if (resultArr[i] === "0") {
      ++zero;
    } else {
      break;
    }
  }

  return zero > 0 ? Number(result?.toFixed(decimalN - zero)) : result;
};

export default calculate;
