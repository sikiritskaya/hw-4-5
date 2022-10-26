import { useState } from "react";
import Words from "../Words/Words";

const Checkbox = ({onChecked, words, filterLetter, reset }) => {
    const [isChecked, setIsChecked] = useState(false);

    const changeChecked = () => {
        setIsChecked((prev) => !prev)
        onChecked(isChecked)
    }

    const toClear = () => {
        setIsChecked(false)
        //reset()
    }

  return (
    <div>
      <input type="checkbox" checked={isChecked} onChange={changeChecked}/>
      <button onClick={toClear}>Clear</button>
      <div><Words words={words} isChecked={isChecked} filterLetter={filterLetter}/></div>
    </div>
  );
};

export default Checkbox;
