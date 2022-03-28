import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";

const Header = (props) => {

    const onSearch = props.onSearch;
    const returnSearch = props.returnSearch;
    if(!props.currentFilm) {
        return(
            <div className = "header--container d-flex justify-content-between">
                <div className = "header--webName" onClick={props.refreshPage} style = {{cursor:"pointer"}}>
                    SINEMA
                </div>
                <SearchBar onSearch = {onSearch} returnSearch = {returnSearch}/>
            </div>
        )
    }
    else {
        return(
            <div className = "header--container d-flex justify-content-between">
                <div className = "header--webName" onClick={props.refreshPage} style = {{cursor:"pointer"}}>
                    SINEMA
                </div>
            </div>
        )
    }
   
}

export default Header;
