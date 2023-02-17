import { useState } from "react";
import { useInputChange } from "./functions/hooks/useInputChange";
import "./App.css";
const debounce = (callback, timeout) => {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(...args), timeout);
  };
};


function App() {
  const [inputValue, setInputValue] = useState("");
  const inputHandler = useInputChange('')
  const handleChangeInput = (event) => {
    debounce(setInputValue, 500)(event.target.value);
  };
  return (
    <div>
      <h1>xin chao 0</h1>
      <h1>xin chao</h1>
      <h1>test 1</h1>
      <h1>test 2</h1>
      <h1>test 3</h1>
      <h1>test 4</h1>
      <h1>test 5</h1>
      <h1>test 6</h1>
      <input
        type="text"
        // onChange={(event) => handleChangeInput(event)}
        // value={inputValue}
        value={inputHandler.value}
        onChange={(e) => inputHandler.onChange(e.target.value)}
      />
    </div>
  );
}

export default App;
