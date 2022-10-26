import { useState } from "react";
import Search from "../Search/Search";
import Words from "../Words/Words";

const Checkbox = ({ onChecked, words, filterLetter, reset, onSearch }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [searchList, setSearchList] = useState("");

  const handleChange = (e) => {
    setSearchList(e.target.value);
    onSearch(e.target.value, isChecked);
  };

  const changeChecked = () => {
    setIsChecked((prev) => !prev);
    onChecked(isChecked);
  };

  const toClear = (e) => {
    setIsChecked(false);
    setSearchList('')
    onSearch(e.target.value)
  };

  return (
    <div>
      <input
        onChange={handleChange}
        type="text"
        value={searchList}
        placeholder="Type here to search..."
      />
      <input type="checkbox" checked={isChecked} onChange={changeChecked} />
      <button onClick={toClear}>Clear</button>
      <div>
        <Words
          words={words}
          isChecked={isChecked}
          filterLetter={filterLetter}
        />
      </div>
    </div>
  );
};

export default Checkbox;
