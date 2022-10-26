import { useEffect, useState } from 'react';
import axios from 'axios'
import got from 'got';
import request from 'superagent'
import './App.css';
import Checkbox from './components/Buttons/Checkbox';
import Search from './components/Search/Search';
//import Words from './components/Words/Words';

const URL = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

function App() {

  const [words, setWords] = useState(null)
  const [filterList, setFilterList] = useState(null)
  const [filterLetter, setFilterLetter] = useState(null)

  useEffect(() => {
    fetch(URL).then(res => res.json())
      .then(data => {
        setWords(data)
        setFilterList(data)
        setFilterLetter(data)
      })
  }, [])

  /* useEffect(() => {
    axios.get(URL).then(response => {
      setWords(response.data)
      setFilterList(response.data)
      setFilterLetter(response.data)
    })
  }, []) */

  /* useEffect(() => {
    request.get(URL).then(response => {
      setWords(response.data)
      setFilterList(response.data)
      setFilterLetter(response.data)
    })
  }, [])
 */
  const onSearch = (value) => {
    const searchList = filterList.filter(word => {
      return word.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    })
    setWords(searchList)

  }

  const onChecked = (checked) => {
    const newArr = filterLetter.slice().sort((a, b) => a.title > b.title ? 1 : -1)
    console.log('words', words)
    console.log('filter', filterLetter)
    if (!checked) {
      return setFilterLetter(newArr)
    }
    if (checked) {
      return setWords(words)
    }
  }
  const reset = () => {
    return true
  }
  return (
    !!words && (
      <>
        <Search onSearch={onSearch} reset={reset} />
        <Checkbox words={words} reset={reset} filterLetter={filterLetter} onChecked={onChecked} /* setWords={setWords} */ />
        {/* <Words words={words} /> */}
      </>)
  );
}

export default App;
