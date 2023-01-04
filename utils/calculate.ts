const MAX_LENGTH = 14;

export const generateDecimal = (num: number) => {
  if (Number.isInteger(num)) return Math.ceil(num) + "";

  const result = num?.toFixed(MAX_LENGTH);

  const resultArr = [...result.split("")];

  let zero = 0;
  for (let i = resultArr.length - 1; i > resultArr.length - MAX_LENGTH; i--) {
    if (resultArr[i] === "0") {
      ++zero;
    } else {
      break;
    }
  }

  return zero > 0 ? num.toFixed(MAX_LENGTH - zero) : result;
};

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
      result = 0;
  }

  return generateDecimal(result);
};

export default calculate;
