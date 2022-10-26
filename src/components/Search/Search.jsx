import { useState } from "react";

const Search = ({onSearch, reset}) => {
const[searchList, setSearchList] = useState('')

const handleChange = (e) => {
  setSearchList(e.target.value)
  onSearch(e.target.value)
}

//const a = reset ? setSearchList('') : searchList
    return (
      <input onChange={handleChange} type="text" value={searchList} placeholder="Type here to search..." />
    );
  };
  
  export default Search;