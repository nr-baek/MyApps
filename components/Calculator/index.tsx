import React, { useState } from "react";
import styles from "../../styles/Calculator.module.css";

function Index() {
  const [value, setValue] = useState("0");
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [calc, setCalc] = useState("");
  const [isCalcClicked, setIsCalcClicked] = useState(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // if (!isCalcClicked) {
    //   setValue(e.target.value);
    // }
    // console.log(e.target.value);
  };

  const onKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // if (isCalcClicked) {
    //   setValue(e.key);
    //   setIsCalcClicked(false);
    // }
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

  const onClickButton = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;

    if (!(target instanceof HTMLButtonElement)) {
      return;
    }

    const numberClicked = target.className.includes(styles.number);
    const calcClicked = target.className.includes(styles.calc);
    const acClicked = target.className.includes(styles.ac);
    const pointClicked = target.className.includes(styles.point);

    if (numberClicked) {
      if (isCalcClicked || value === "0") {
        setValue(target.textContent as string);
        setIsCalcClicked(false);
      } else {
        setValue(state => (state + target.textContent) as string);
      }
    } else if (calcClicked) {
      const calcType = target.textContent as string;
      if (isCalcClicked) {
        if (calcType === "=") {
          setValue(prevValue => {
            if (!num2) {
              setNum2(prevValue);
            }
            const calcValue = calculate(+prevValue, +num2, calc) + "";
            setNum1(calcValue);
            return calcValue;
          });
        } else {
          setCalc(calcType);
        }
      } else {
        if (calcType === "=") {
        } else {
          setIsCalcClicked(true);
        }
        if (!num1) {
          setNum1(value);
          if (calcType !== "=") {
            setCalc(calcType);
          }
        } else {
          if (calcType !== "=") {
            setCalc(prevCalc => {
              setValue(prevValue => {
                const calcValue = calculate(+num1, +prevValue, prevCalc) + "";
                setNum2(prevValue);
                setNum1(calcValue);
                return calcValue;
              });
              return calcType;
            });
          } else {
            setValue(prevValue => {
              const calcValue = calculate(+num1, +prevValue, calc) + "";
              setNum1(calcValue);
              return calcValue;
            });
          }
        }
      }
    } else if (acClicked) {
      setValue("0");
      setNum1("");
      setNum2("");
      setCalc("");
      setIsCalcClicked(false);
    } else if (pointClicked) {
      setValue(state => state + ".");
    }
  };

  return (
    <>
      {/* <p>num1: {num1}</p>
      <p>calc: {calc}</p>
      <p>num2: {num2}</p> */}
      <div className={styles.container} onClick={onClickButton}>
        <input
          className={styles.input}
          type="text"
          value={value}
          onChange={onChangeInput}
          onKeyUp={onKeyUpInput}
        />
        <button className={styles.ac}>ac</button>
        <button className={styles.calc}>/</button>
        <button className={styles.number}>7</button>
        <button className={styles.number}>8</button>
        <button className={styles.number}>9</button>
        <button className={styles.calc}>*</button>
        <button className={styles.number}>4</button>
        <button className={styles.number}>5</button>
        <button className={styles.number}>6</button>
        <button className={styles.calc}>-</button>
        <button className={styles.number}>1</button>
        <button className={styles.number}>2</button>
        <button className={styles.number}>3</button>
        <button className={styles.calc}>+</button>
        <button className={styles.zero + " " + styles.number}>0</button>
        <button className={styles.point}>.</button>
        <button className={styles.calc}>=</button>
      </div>
    </>
  );
}

export default Index;
