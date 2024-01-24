import React from 'react';
import Display from './Display';
import Button from './Button';
import styles from './cal.module.css';
import { useState } from 'react';
import { evaluate, round } from "mathjs";
function Calculat() {
const [input, setInput] = useState("");
const [answer, setAnswer] = useState("");
const [vale, setVale] = useState("");
  //input
  const inputHandler = (event) => {
    if (answer === "Invalid Input!!") return;
    var val = event.target.value;
    if (val === "x2") val = "^2";
    else if (val === "x3") val = "^3";
    else if (val === "3√x") val = "^(1÷3)";
    else if (val === "√x") val = "^(1÷2)";
    else if (val === "y√x") val= '√'
    else if (val === "xy") val = "^";
    else if (val === "x3") val = "^3";
    else if (val === "Ans"){
      val='';
     setAnswer(answer)
      // console.log(val)
    }
    else if (val === "x2") val = "^2";
    else if (val === "ex") val = "e^";
    else if (val === "EXP"){
      val = '×' +'10' + '^';
    }
    // else if (val === "M+"){
    //   val='';
    //   setVale(vale+answer);
    //   console.log(input)
    //   // setVale(vale+answer);
    //   // console.log(vale)
    // }
    // else if (val === "M-"){
    //   val='';
    //   setAnswer('');
    //   setInput('');
    //   setVale('');
    //   console.log(vale)
    // }
    else if (val === "MR"){
      val=''
      setAnswer(vale);
    }
    else if (val === "10x") val = "10^";
    else if (val === "log") val = "log(";
    else if (val === "ln") val = "ln(";
    else if (val === "sin") val = "sin(";
    else if (val === "cos") val = "cos(";
    else if (val === "tan") val = "tan(";  
    else if (val === "sin-1") val = "asin(";
    else if (val === "cos-1") val = "acos(";
    else if (val === "tan-1") val = "atan(";
    else if (val === "n!") val = "!";
    else if (val === "RND") {
      val='';
      // setInput( Math.floor(Math.random() * 10));
      setAnswer(Math.floor(Math.random() * 10));
    }
    else if (val === "1/x") val = "1/"; 
    let str = input + val;
    if (str.length > 14) return;
    if (answer !== "") {  
      setInput(answer + val);
      setAnswer("");
    } else setInput(str);
  };
 const changePlusMinus = () => {
  //need to change for answer
  if (answer === "Invalid Input!!") return;
  else if (answer !== "") {
    let ans = answer.toString();
    if (ans.charAt(0) === "-") {
      let plus = "+";
      setInput(plus.concat(ans.slice(1, ans.length)));
    } else if (ans.charAt(0) === "+") {
      let minus = "-";
      setInput(minus.concat(ans.slice(1, ans.length)));
    } else {
      let minus = "-";
      setInput(minus.concat(ans));
    }
    setAnswer("");
  } else {
    if (input.charAt(0) === "-") {
      let plus = "+";
      setInput((prev) => plus.concat(prev.slice(1, prev.length)));
    } else if (input.charAt(0) === "+") {
      let minus = "-";
      setInput((prev) => minus.concat(prev.slice(1, prev.length)));
    } else {
      let minus = "-";
      setInput((prev) => minus.concat(prev));
    }
  }
};
  const clearInput = () => {
    setInput("");
    setAnswer("");
  };
  const checkBracketBalanced = (expr) => {
    let stack = [];
    for (let i = 0; i < expr.length; i++) {
      let x = expr[i];
      if (x === "(") {
        stack.push(x);
        continue;
      }

      if (x === ")") {
        if (stack.length === 0) return false;
        else stack.pop();
      }
    }
    return stack.length === 0;
  };
  //calculate answer
  const calculateAns = () => {
    if (input === "") return;
    let result = 0;
    let finalexpression = input;
    //  finalexpression = input.replaceAll("^", "**");  //for eval()
    finalexpression = finalexpression.replaceAll("π", "3.14"); 
    finalexpression = finalexpression.replaceAll("custom", "Math.pow"); 
    finalexpression = finalexpression.replaceAll("e", "2.71828"); 
    finalexpression = finalexpression.replaceAll("÷", "/");
    finalexpression = finalexpression.replaceAll("×", "*");
    finalexpression = finalexpression.replaceAll("log", "log10");
    finalexpression = finalexpression.replaceAll("ln", "log");
    finalexpression = finalexpression.replaceAll("n!", "Factorial");
    try {
      // check brackets are balanced or not
      if (!checkBracketBalanced(finalexpression)) {
        const errorMessage = { message: "Brackets are not balanced!" };
        throw errorMessage;
      }
      result = evaluate(finalexpression); //mathjs
      console.log(result)
    } catch (error) {
      result =
        error.message === "Brackets are not balanced!"
          ? "Brackets are not balanced!"
          : "Invalid Input!!"; //error.message;
    }
    isNaN(result) ? setAnswer(result) : setAnswer(round(result, 3));
  };
  const backSpace = () => {
    if (answer !== "") {
      setInput(answer.toString().slice(0, -1));
      setAnswer("");
    } else setInput((prev) => prev.slice(0, -1));
  };
  const mPlus = () => {
    if (answer !== "") {
      setVale(vale+answer.toString());
      // setAnswer("");
    } 
  };
  const mMins = () => {
    if (answer !== "") {
      setVale("");
      setAnswer("")
      setInput("")
      // setAnswer("");
    } 
  };
  return (
    <div className={styles.container}>
        <Display input={input} setInput={setInput} answer={answer} />
        <Button 
        inputHandler={inputHandler}
        calculateAns={calculateAns}
        clearInput={clearInput}
        backSpace={backSpace}
        changePlusMinus={changePlusMinus}
        mPlus ={mPlus}
        mMins={mMins}
       
        />
    </div>
  )
}

export default Calculat
