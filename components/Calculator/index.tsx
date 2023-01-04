import React, { useState } from "react";
import styles from "../../styles/Calculator.module.css";
import calculate from "../../utils/calculate";
import { checkPreventStatus } from "../../utils/checkInputable";

function Index() {
  const [value, setValue] = useState("0");
  const [prevNum, setPrevNum] = useState("");
  const [calc, setCalc] = useState("");
  const [isCalcClicked, setIsCalcClicked] = useState(false);
  const [isPointClicked, setIsPointClicked] = useState(false);
  const [isEqualClicked, setIsEqualClicked] = useState(false);

  const inputCalc = (pressedKey: string) => {
    if (isCalcClicked) {
      setCalc(pressedKey);
    } else if (isEqualClicked) {
      setIsEqualClicked(false);
      setPrevNum(value);
      setCalc(pressedKey);
    } else if (!calc && prevNum === "") {
      setPrevNum(value);
      setCalc(pressedKey);
    } else {
      setCalc(prevCalc => {
        setValue(prevValue => {
          const calcValue = calculate(+prevNum, +prevValue, prevCalc);
          setPrevNum(calcValue);
          if (calcValue.includes(".")) {
            setIsPointClicked(true);
          }
          return calcValue;
        });
        return pressedKey;
      });
    }

    setIsCalcClicked(true);
  };

  const inputEqual = () => {
    if (!isEqualClicked && !isCalcClicked && prevNum && calc) {
      setIsEqualClicked(true);
      setValue(prevValue => {
        const calcValue = calculate(+prevNum, +prevValue, calc);
        setPrevNum(calcValue);
        if (calcValue.includes(".")) {
          setIsPointClicked(true);
        }
        return calcValue;
      });
    }
  };

  const initialState = () => {
    setValue("0");
    setPrevNum("");
    setCalc("");
    setIsCalcClicked(false);
    setIsPointClicked(false);
    setIsEqualClicked(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<Element>) => {
    const pressedKey = e.key;

    if (checkPreventStatus(pressedKey, isPointClicked)) {
      e.preventDefault();
    }

    if (pressedKey >= "0" && pressedKey <= "9") {
      if (isCalcClicked || value === "0") {
        setIsPointClicked(false);
        setIsCalcClicked(false);
        setValue("");
      }
    } else if (
      pressedKey === "+" ||
      pressedKey === "-" ||
      pressedKey === "*" ||
      pressedKey === "/"
    ) {
      inputCalc(pressedKey);
    } else if (pressedKey === "=" || pressedKey === "Enter") {
      inputEqual();
    } else if (pressedKey === "." && !isPointClicked) {
      setIsPointClicked(true);
    } else if (pressedKey === "Backspace" && value[value.length - 1] === ".") {
      setIsPointClicked(false);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setValue(e.target.value);
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

    const clickedKey = target.textContent as string;

    if (numberClicked) {
      if (isCalcClicked || value === "0") {
        setIsPointClicked(false);
        setValue(clickedKey);
        setIsCalcClicked(false);
      } else {
        setValue(prevValue => prevValue + clickedKey);
      }
    } else if (calcClicked) {
      inputCalc(clickedKey);
    } else if (equalClicked) {
      inputEqual();
    } else if (pointClicked && !isPointClicked) {
      setValue(prevValue => prevValue + ".");
      setIsPointClicked(true);
    } else if (clearClicked) {
      initialState();
    }
  };

  return (
    <>
      <div className={styles.container} onClick={onClick} tabIndex={0}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
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
