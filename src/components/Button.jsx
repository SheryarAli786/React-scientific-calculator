import React from 'react';
import styles from './cal.module.css';
function Button({inputHandler, calculateAns, clearInput, backSpace, changePlusMinus, mPlus, mMins}) {
  return (
    <>
      <div className="btns">
    <div className={styles.row}>
        <button className={styles.button} value="sin" onClick={inputHandler}>sin</button>
        <button className={styles.button} value="cos" onClick={inputHandler}>cos</button>
        <button className={styles.button} value="tan" onClick={inputHandler}>tan</button>
        <span style={{fontSize: '14px', display: 'flex', alignItems: 'center', paddingLeft: '15px'}}>Deg<input type="radio" id="html" name="fav_language"/></span>
        <span style={{fontSize: '14px', display: 'flex', alignItems: 'center', paddingLeft: '10px'}}>Rad<input type="radio" id="html" name="fav_language"/></span>
        </div>
    <div className={styles.row}>
        <button className={styles.button} value="sin-1" onClick={inputHandler}>sin<sup>-1</sup></button>
        <button className={styles.button} value="cos-1" onClick={inputHandler}>cos<sup>-1</sup></button>
        <button className={styles.button} value="tan-1" onClick={inputHandler}>tan<sup>-1</sup></button>
        <button className={styles.button} value="π" onClick={inputHandler}>π</button>
        <button className={styles.button} value="e" onClick={inputHandler}>e</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="xy" onClick={inputHandler}>x<sup>y</sup></button>
        <button className={styles.button} value="x3"  onClick={inputHandler}>x<sup>3</sup></button>
        <button className={styles.button} value="x2"  onClick={inputHandler}>x<sup>2</sup></button>
        <button className={styles.button} value="ex" onClick={inputHandler}>e<sup>x</sup></button>
        <button className={styles.button} value="10x" onClick={inputHandler}>10<sup>x</sup></button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="y√x" onClick={changePlusMinus}>±</button>
        <button className={styles.button} value="3√x" onClick={inputHandler}><sup>3</sup>√x</button>
        <button className={styles.button} value="√x" onClick={inputHandler}>√x</button>
        <button className={styles.button} value="ln" onClick={inputHandler}>ln</button>
        <button className={styles.button} value="log" onClick={inputHandler}>log</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="(" onClick={inputHandler}>(</button>
        <button className={styles.button} value=")" onClick={inputHandler}>)</button>
        <button className={styles.button} value="1/x" onClick={inputHandler}>1/x</button>
        <button className={styles.button} value="%" onClick={inputHandler}>%</button>
        <button className={styles.button} value="n!" onClick={inputHandler}>n!</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="7" onClick={inputHandler}>7</button>
        <button className={styles.button} value="8" onClick={inputHandler}>8</button>
        <button className={styles.button} value="9" onClick={inputHandler}>9</button>
        <button className={styles.button} value="+" onClick={inputHandler}>+</button>
        <button className={styles.button} value="Back" onClick={backSpace}>Back</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="4" onClick={inputHandler}>4</button>
        <button className={styles.button} value="5" onClick={inputHandler}>5</button>
        <button className={styles.button} value="6" onClick={inputHandler}>6</button>
        <button className={styles.button} value="-" onClick={inputHandler}>-</button>
        <button className={styles.button} value="Ans"  onClick={inputHandler}>Ans</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="1" onClick={inputHandler}>1</button>
        <button className={styles.button} value="2" onClick={inputHandler}>2</button>
        <button className={styles.button} value="3" onClick={inputHandler}>3</button>
        <button className={styles.button} value="×" onClick={inputHandler}>×</button>
        <button className={styles.button} value="M+" onClick={mPlus}>M+</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="0" onClick={inputHandler}>0</button>
        <button className={styles.button} value="." onClick={inputHandler}>.</button>
        <button className={styles.button} value="EXP" onClick={inputHandler}>EXP</button>
        <button className={styles.button} onClick={inputHandler} style={{fontSize: "21px"} } value="÷">÷</button>
        <button className={styles.button} value="M-" onClick={mMins}>M-</button>
    </div>
    <div className={styles.row}>
        <button className={styles.button} value="RND"  onClick={inputHandler}>RND</button>
        <button className={styles.button} value="00" onClick={inputHandler}>00</button>
        <button className={styles.button} id={styles.ac} value="AC" onClick={clearInput}>AC</button>
        <button className={styles.button} value="=" onClick={calculateAns}>=</button>
        <button className={styles.button} value="MR" onClick={inputHandler}>MR</button>
    </div>
    </div>
    </>
  )
}

export default Button
