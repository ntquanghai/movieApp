import React from "react";

const SearchBar = (props) => {

    return(
    <div className= "header--searchBar d-flex flex-row">
        <input className = "searchBar--input" type = "input" onChange={props.onSearch}></input>
        <button className = "searchBar--icon" onClick={props.returnSearch}>
            <img className = "icon--img" src = "./search.png"></img>
        </button>
    </div>
    )
}

export default SearchBar;