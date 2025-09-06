import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);
  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((previousResult) => (previousResult -= inputValue));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    setResult((previousResult) => previousResult * inputValue);
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    const inputValue = Number(inputRef.current.value);
    if (inputValue === 0) {
      alert("Cannot divide by zero!!");
      return;
    }
    setResult((previousResult) => previousResult / inputValue);
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = "";
    inputRef.current.focus();
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>subtract</button>
        <button onClick={times}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>resetInput</button>
        <button onClick={resetResult}>resetResult</button>
        {/* Add the subtract button */}
        {/* Add the multiply button */}
        {/* Add the divide button */}
        {/* Add the resetInput button */}
        {/* Add the resetResult button */}
      </form>
    </div>
  );
}

export default App;
