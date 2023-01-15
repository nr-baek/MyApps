const MAX_LENGTH = 14;

// const countDecimals = (value: number): number => {
//   let text = value.toString();
//   if (text.indexOf("e-") > -1) {
//     let [base, trail] = text.split("e-");
//     let deg = parseInt(trail, 10);
//     return deg;
//   }
//   if (Math.floor(value) !== value) {
//     return value.toString().split(".")[1].length || 0;
//   }
//   return 0;
// };

export const generateDecimal = (num: number) => {
  if (Number.isInteger(num)) return Math.ceil(num) + "";

  const result = num?.toFixed(MAX_LENGTH);

  // const resultArr = [...result.split("")];

  // let zero = 0;
  // for (let i = resultArr.length - 1; i > resultArr.length - MAX_LENGTH; i--) {
  //   if (resultArr[i] === "0") {
  //     ++zero;
  //   } else {
  //     break;
  //   }
  // }

  // return zero > 0 ? num.toFixed(MAX_LENGTH - zero) : result;

  return Number(result) + "";
};

const calculate = (num1: number, num2: number, calc: string) => {
  let decimalCount = 0;
  // num1, num2 중에 더 소수점 긴거 만큼 10의 제곱 곱했다가 계산하고 다시 나누는 로직 추가하기
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
