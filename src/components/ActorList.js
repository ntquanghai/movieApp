import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ActorDetail from "./ActorDetail";

const ActorList = (props) => {
    const [actorListState, setActorListState] = useState([])
    {   
        useEffect(() => {
            props.fetchActorData(setActorListState)
        },[]);


        return (
            <div>
                <ActorDetail currentFilm = {props.currentFilm} data = {props.movieCast}/>
            </div>
        )
    
    }
}

export default ActorList;