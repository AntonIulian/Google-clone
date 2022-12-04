import React from "react";
import "./Search.css";
import MicIcon from "@mui/icons-material/Mic"
import SearchIcon from "@mui/icons-material/Search"
import {Button} from "@material-ui/core"
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import { useStateValue } from "../StateProvider";
import {actionTypes} from "../reducer"



function Search({hideButtons = false}) {
    const [{}, dispatch] = useStateValue()
const [input, setInput] = useState("")

function eventSearched(search) {
setInput(search)
console.log(search);
}

const search = e => {
e.preventDefault()
dispatch({
  type: actionTypes.SET_SEARCH_TERM,
  term: input
})
    navigate('/search')
}


const navigate= useNavigate()
function routeChange(event) {
    console.log(event.charCode);
    console.log(input);
    if (event.charCode === 13) {
      dispatch({
        type: actionTypes.SET_SEARCH_TERM,
        term: input
    })

        navigate('/search')
    }
}
const search2 = e => {
  e.preventDefault()
dispatch({
  type: actionTypes.SET_SEARCH_TERM,
  term: input
})
    navigate('/search')
}


console.log(input);

  return (
    
    <form className="search" onKeyPress={(event) => routeChange(event)}>

      <div className="search__input">
        <SearchIcon onClick={search2} className="search__input--icon"></SearchIcon>
        <input value={input}  onChange={e => eventSearched(e.target.value)}/>
        <MicIcon className="nocursor"></MicIcon>
      </div>

      { !hideButtons ?

          <div className="search__buttons">
        <Button type="submit" onClick={search} variant="outlined">Google Search</Button>
        <Button className="nocursor" variant="outlined">I'm Feeling Lucky</Button>
      </div> :  <div className="search__buttons">
        <Button className="hide" type="submit" onClick={search} variant="outlined">Google Search</Button>
        <Button className="hide" variant="outlined">I'm Feeling Lucky</Button>
      </div>
    }
    </form>
  );
}

export default Search;
