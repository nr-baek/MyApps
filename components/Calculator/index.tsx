import React from "react";
import styles from "../../styles/Calculator.module.css";

function index() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" />
      {/* <button className="ac">ac</button> */}
      <button className={styles.ac}>ac</button>
      <button className={styles.calc}>/</button>
      <button className={styles.number}>7</button>
      <button className={styles.number}>8</button>
      <button className={styles.number}>9</button>
      <button className={styles.calc}>X</button>
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
  );
}

export default index;
