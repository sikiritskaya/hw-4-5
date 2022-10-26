import { useState } from 'react';
import './App.css';
import Checkbox from './components/Buttons/Checkbox';
import Search from './components/Search/Search';
//import Words from './components/Words/Words';

function App() {

  const [words, setWords] = useState(['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'])
  const [filterList, setFilterList] = useState(words)
  const [filterLetter, setFilterLetter] = useState(words.slice().sort())
  

  const onSearch = (value) => {
    const searchList = filterList.filter(word => {
      return word.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    setWords(searchList)
  }

  const onChecked = (checked) => {
    console.log(words)
    if (!checked) {
      return setFilterLetter(filterLetter)
    } 
    if(checked){
      return setWords(words)
    }
  }
  const reset = () => {
    return true
  }
  return (
    <>
      <Search onSearch={onSearch} reset={reset} />
      <Checkbox words={words} reset={reset} filterLetter={filterLetter} onChecked={onChecked} /* setWords={setWords} */ />
      {/* <Words words={words} /> */}
    </>
  );
}

export default App;
