import React, { useState } from "react";
import styles from "../../styles/Calculator.module.css";
import calculate from "../../utils/calculate";

function Index() {
  const [value, setValue] = useState("0");
  const [prevNum, setPrevNum] = useState("");
  const [calc, setCalc] = useState("");
  const [isCalcClicked, setIsCalcClicked] = useState(false);
  const [isPointClicked, setIsPointClicked] = useState(false);
  const [isEqualClicked, setIsEqualClicked] = useState(false);

  const operate = (inputType: string, inputValue: string): void => {
    if (inputType === "NUMBER") {
      if (isCalcClicked || value === "0") {
        setIsPointClicked(false);
        setValue(inputValue);
        setIsCalcClicked(false);
      } else {
        setValue(prevValue => prevValue + inputValue);
      }
    } else if (inputType === "CALC") {
      if (isCalcClicked) {
        setCalc(inputValue);
      } else if (isEqualClicked) {
        setIsEqualClicked(false);
        setPrevNum(value);
        setCalc(inputValue);
      } else if (!calc && prevNum === "") {
        setPrevNum(value);
        setCalc(inputValue);
      } else {
        setCalc(prevCalc => {
          setValue(prevValue => {
            const calcValue = calculate(+prevNum, +prevValue, prevCalc) + "";
            setPrevNum(calcValue);
            return calcValue;
          });
          return inputValue;
        });
      }

      setIsCalcClicked(true);
    } else if (
      inputType === "EQUAL" &&
      !isEqualClicked &&
      !isCalcClicked &&
      prevNum &&
      calc
    ) {
      setIsEqualClicked(true);
      setValue(prevValue => {
        const calcValue = calculate(+prevNum, +prevValue, calc) + "";
        setPrevNum(calcValue);
        return calcValue;
      });
    } else if (inputType === "POINT" && !isPointClicked) {
      setValue(prevValue => prevValue + ".");
      setIsPointClicked(true);
    } else if (inputType === "CLEAR") {
      setValue("0");
      setPrevNum("");
      setCalc("");
      setIsCalcClicked(false);
      setIsPointClicked(false);
      setIsEqualClicked(false);
    } else if (inputType === "BACKSPACE" && value !== "0") {
      setValue(prevValue => prevValue.substring(0, prevValue.length - 1));
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<Element>) => {
    const inputValue = e.key;
    if (inputValue >= "0" && inputValue <= "9") {
      operate("NUMBER", inputValue);
    } else if (
      inputValue === "+" ||
      inputValue === "-" ||
      inputValue === "*" ||
      inputValue === "/"
    ) {
      operate("CALC", inputValue);
    } else if (inputValue === "=" || inputValue === "Enter") {
      operate("EQUAL", "");
    } else if (inputValue === ".") {
      operate("POINT", "");
    } else if (inputValue === "Backspace") {
      operate("BACKSPACE", "");
    }
  };

  const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target;
    if (!(target instanceof HTMLDivElement)) {
      return;
    }

    const numberClicked = target.className.includes(styles.number);
    const calcClicked = target.className.includes(styles.calc);
    const equalClicked = target.className.includes(styles.equal);
    const pointClicked = target.className.includes(styles.point);
    const clearClicked = target.className.includes(styles.clear);

    const inputValue = target.textContent as string;

    if (numberClicked) {
      operate("NUMBER", inputValue);
    } else if (calcClicked) {
      operate("CALC", inputValue);
    } else if (equalClicked) {
      operate("EQUAL", "");
    } else if (pointClicked) {
      operate("POINT", "");
    } else if (clearClicked) {
      operate("CLEAR", "");
    }
  };

  return (
    <>
      <div
        className={styles.container}
        onClick={onClick}
        onKeyDown={onKeyDown}
        tabIndex={0}
      >
        <p>{value}</p>
        <div className={styles.clear}>clear</div>
        <div className={styles.calc}>/</div>
        <div className={styles.number}>7</div>
        <div className={styles.number}>8</div>
        <div className={styles.number}>9</div>
        <div className={styles.calc}>*</div>
        <div className={styles.number}>4</div>
        <div className={styles.number}>5</div>
        <div className={styles.number}>6</div>
        <div className={styles.calc}>-</div>
        <div className={styles.number}>1</div>
        <div className={styles.number}>2</div>
        <div className={styles.number}>3</div>
        <div className={styles.calc}>+</div>
        <div className={styles.zero + " " + styles.number}>0</div>
        <div className={styles.point}>.</div>
        <div className={styles.equal}>=</div>
      </div>
    </>
  );
}

export default Index;
