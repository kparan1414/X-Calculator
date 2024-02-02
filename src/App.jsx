import { useState } from "react";
import style from "./App.module.css";
function App() {
  const [expression, setExpression] = useState("");
  const [answer, setAnswer] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = (char) => {
    setExpression((prevExp) => {
      return prevExp + char;
    });
  };

  const handleClear = () => {
    setExpression("");
    setAnswer(0);
    setShowAnswer(false);
  };

  const getAnswer = (exp) => {
    let ans;
    if (!exp) ans = "Error";
    else ans = eval(exp);
    // console.log(ans);
    setAnswer(ans);
    // return ans;
  };

  const handleEquals = () => {
    getAnswer(expression);
    setShowAnswer(true);
  };

  return (
    <div id={style.parent}>
      <h1>React Calculator</h1>
      <input type="text" value={expression} readOnly />
      {showAnswer && <div id={style.answer}>{answer}</div>}

      <div className={style.wrapper}>
        <div className={style.row}>
          <button
            onClick={() => {
              handleClick("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              handleClick("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              handleClick("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              handleClick("+");
            }}
          >
            +
          </button>
        </div>
        <div className={style.row}>
          <button
            onClick={() => {
              handleClick("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handleClick("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handleClick("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              handleClick("-");
            }}
          >
            -
          </button>
        </div>
        <div className={style.row}>
          <button
            onClick={() => {
              handleClick("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleClick("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handleClick("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              handleClick("*");
            }}
          >
            *
          </button>
        </div>
        <div className={style.row}>
          <button onClick={handleClear}>C</button>
          <button
            onClick={() => {
              handleClick("0");
            }}
          >
            0
          </button>
          <button onClick={handleEquals}>=</button>
          <button
            onClick={() => {
              handleClick("/");
            }}
          >
            /
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
