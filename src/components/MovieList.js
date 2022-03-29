import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import MovieDetail from "./MovieDetail";
import ActorList from "./ActorList";

const MovieList = (props) => {
    const [movieListState, setMovieListState] = useState([])
    let movieData = props.movieData

    if(!props.currentFilm) {
        if(props.searchedData.length === 0) {
            return (
                <div>
                    <MovieDetail data = {movieData.playing} text = {"NOW PLAYING"} onMovieSelect = {props.onMovieSelect}/>
                    <MovieDetail data = {movieData.upcoming} text = {"UPCOMING"} onMovieSelect = {props.onMovieSelect}/>
                    <MovieDetail data = {movieData.topRated} text = {"TOP RATED"} onMovieSelect = {props.onMovieSelect}/>
                </div>
            )
        }
        else {
            return(        
            <div>
                <MovieDetail data = {props.searchedData} text = {"SEARCH RESULTS FOR: " + props.searchValue} onMovieSelect = {props.onMovieSelect}/>
            </div>)
        }
    }
    else {
        return(        
            <div>
                <ActorList currentFilm = {props.currentFilm} fetchActorData = {props.fetchActorData} movieCast = {props.movieCast}/>
            </div>)
    }
    
}

export default MovieList;

