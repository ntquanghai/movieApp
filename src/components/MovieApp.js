import React, { useState, useEffect, createContext, useContext, useRef } from "react";
import Header from "./Header";
import MovieCarousel from "./MovieCarousel";
import MovieList from "./MovieList";
import ActorList from "./ActorList"; 

let movieData = ({
    playing: [],
    upcoming: [],
    topRated: [],
});

let dataFromSearch = [];

const MovieApp = (props) => {
    const [movieAppState, setMovieAppState] = useState({});
    
    const callAPI = (typeQuery,typeArray) => { 
        fetch("https://api.themoviedb.org/3/movie/"+typeQuery+"?api_key=3324f7ac29cf096e0805ee5a9275c4f2", {
            method: "GET"
        })
        .then((response)=> {
            return response.json();
        })
        .then((data) => {
            movieData[typeArray] = data;
            setMovieAppState({
                movieData: movieData,
            })
            return data;
        })
    }

    const fetchActorData = (setState) => {
        fetch("https://api.themoviedb.org/3/movie/"+movieAppState.currentFilm.id+"/credits?api_key=3324f7ac29cf096e0805ee5a9275c4f2", {
          method: "GET"
        })
        .then((response)=> {
          return response.json();
        })
        .then((data) => {
            setMovieAppState({
                ...movieAppState,
              movieCast: data,
            })
            return data;
        })
    }

    const onMovieSelect = (event) => {
        fetch("https://api.themoviedb.org/3/movie/"+event.target.id+"?api_key=3324f7ac29cf096e0805ee5a9275c4f2", {
          method: "GET"
        })
        .then((response)=> {
          return response.json();
        })
        .then((data) => {
            setMovieAppState({
                ...movieAppState,
              currentFilm: data,
            })
            return data;
        })
    }

    const onSearch = (e) => {
        setMovieAppState({
            ...movieAppState,
            searchValue: e.target.value,
        })
    }

    const returnSearch = (e) => {
        fetch("https://api.themoviedb.org/3/search/movie?query="+movieAppState.searchValue+"&api_key=3324f7ac29cf096e0805ee5a9275c4f2", {
            method: "GET"
        })
        .then((response)=> {
            return response.json();
        })
        .then((data) => {
            dataFromSearch = data;
            setMovieAppState({
                ...movieAppState,
                searchedData: dataFromSearch,
            })
            return data;
        })
    }

    const refreshPage = () => {
        window.location.reload(false);
    }


    useEffect(() => {
        Promise.all([
            callAPI("now_playing","playing"),
            callAPI("upcoming","upcoming"),
            callAPI("top_rated","topRated")
        ])
        setMovieAppState([])
    }, [])

    if(movieData.playing.length != 0 && movieData.topRated.length != 0 && movieData.upcoming.length !=0) {
        return( 
            <div className="movie--app" style = {{backgroundColor:"#f2ffff"}}>
                <Header currentFilm = {movieAppState.currentFilm} onSearch = {onSearch} returnSearch = {returnSearch} refreshPage = {refreshPage}/>
                <MovieCarousel movieData = {movieData} currentFilm = {movieAppState.currentFilm}/>
                <MovieList movieData = {movieData} searchedData = {dataFromSearch} searchValue = {movieAppState.searchValue} onMovieSelect = {onMovieSelect} currentFilm = {movieAppState.currentFilm} movieCast = {movieAppState.movieCast} fetchActorData = {fetchActorData}/>
            </div>
        ) 
    }
    else {
        return(
            <div></div>
        )
    }
}

export default MovieApp;