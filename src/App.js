import { useState } from 'react';
import './App.css';
import Checkbox from './components/Buttons/Checkbox';
import Search from './components/Search/Search';
//import Words from './components/Words/Words';

function App() {

  const [words, setWords] = useState(['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'])
  const [filterList, setFilterList] = useState(words)
  const [filterLetter, setFilterLetter] = useState(words.slice().sort())
  

  const onSearch = (value, checked) => {
    const list = !checked ? filterList : filterLetter
    console.log(checked)
    const searchList = list.filter(word => {
      return word.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    setWords(searchList)
  }

  const onChecked = (checked) => {
    //console.log(words)
    //const newArr = filterLetter.slice().sort()
    if (!checked) {
      return setFilterLetter(filterLetter)
    } 
    if(checked){
      return setWords(words)
    }
  }
  /* const reset = () => {
    return true
  } */
  return (
    <>
      {/* <Search onSearch={onSearch} reset={reset} /> */}
      <Checkbox onSearch={onSearch} words={words} /* reset={reset} */ filterLetter={filterLetter} onChecked={onChecked} /* setWords={setWords} */ />
      {/* <Words words={words} /> */}
    </>
  );
}

export default App;
