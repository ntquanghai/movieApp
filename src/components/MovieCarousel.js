import React, {useRef} from "react";

const MovieCarousel = (props) => {
    let tempData = ((props.movieData.playing.results.concat(props.movieData.topRated.results)).concat(props.movieData.upcoming.results))
    let mixedData = (tempData.sort(() => Math.random() - 0.5)).slice(0, 3);
    let chosenData = useRef(mixedData)

    function timeConvert(n) {
        let num = n;
        let hours = (num / 60);
        let rhours = Math.floor(hours);
        let minutes = (hours - rhours) * 60;
        let rminutes = Math.round(minutes);

        return rhours + "h " + rminutes + "m";
    }   

    if(!props.currentFilm) {
        return(
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    
                    <div className="carousel-item active">
                        <img src={"https://image.tmdb.org/t/p/original/"+chosenData.current[0].backdrop_path} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{chosenData.current[0].original_title}</h5>
                            <p>{chosenData.current[0].overview}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://image.tmdb.org/t/p/original/"+chosenData.current[1].backdrop_path} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>{chosenData.current[1].original_title}</h5>
                            <p>{chosenData.current[1].overview}</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={"https://image.tmdb.org/t/p/original/"+chosenData.current[2].backdrop_path} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block"> 
                            <h5>{chosenData.current[2].original_title}</h5>
                            <p>{chosenData.current[2].overview}.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
          )
    }
    else {
        return(
            <div>
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className = "overlay--container d-flex flex-row ">
                                <img className = "overlay--poster" src={"https://image.tmdb.org/t/p/original/"+props.currentFilm.poster_path}/>
                                <div className = "overlay--info">
                                    <div className = "overlay--name">{(props.currentFilm.original_title).toUpperCase()}</div>
                                    <div className = "overlay--plot"><div style = {{fontSize:"20px",fontWeight:"bold"}}>PLOT</div> {props.currentFilm.overview}</div>
                                    <div className = "overlay--runtime d-flex flex-row"><div style = {{fontWeight:"bold", marginRight: "4px", marginBottom: "4px"}}>Runtime:</div> {timeConvert(props.currentFilm.runtime)}</div>
                                    <div className = "overlay--rateNgenre">
                                        <div className= "overlay--genre d-flex flex-row"><div style = {{fontWeight:"bold", marginRight: "4px", marginBottom: "4px"}}>Genre:</div> {
                                            props.currentFilm.genres.map((data,index) => {
                                                if(index<props.currentFilm.genres.length-1) {
                                                    return data.name + "/"
                                                }
                                                else {
                                                    return data.name
                                                }
                                            })
                                        }</div>
                                        <div className = "overlay--ratings d-flex flex-row"><div style = {{fontWeight:"bold", marginRight: "4px", marginBottom: "4px"}}>IMDB Ratings:</div> {props.currentFilm.vote_average}</div>
                                    </div>
                                </div>
                            </div>
                            <img src={"https://image.tmdb.org/t/p/original/"+props.currentFilm.backdrop_path} className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
          )
    }
  
};

export default MovieCarousel;
