import Slider from "react-slick";
import { useState } from "react";

const MovieDetail = (props) => {
  const [movieDetailState, setMovieDetailState] = useState();
  let data = props.data;
  let text = props.text;

  const checkAdult = (data) => {
    if(data.adult) {
        return(
            <div className = "movie--censorship--r">
                R
            </div>
        )
    }
    else {
        return(
            <div className = "movie--censorship--pg">
                PG
            </div>
        )
    }
  }

  const settings = {
    infinite: true,
    slidesToShow: 5,
    speed: 500,
    arrows: true,
};
  return (
    <div className="movie--list--container">
      <div className="list--type">{text}</div>
      <Slider {...settings}>
        {data.results.map((data, index) => (
          <div className="movie--outer--container" key={index}>
            <div className="movie--container">
              <div className="movie--picture" style={{ marginBottom: "8px" }}>
                <div className="movie--img--container">
                  <img
                    className="movie--img"
                    src={
                      "https://image.tmdb.org/t/p/original/" + data.poster_path
                    }
                  ></img>
                  <div className="overlay--background" onClick = {props.onMovieSelect} id = {data.id}>
                    <div className="movie--rating">{data.vote_average}</div>
                  </div>
                </div>
              </div>
              <div className="movie--title d-flex flex-row">
                {checkAdult(data)}
                <div className="movie--name">
                  {data.original_title.toUpperCase()}
                </div>
              </div>
              <div className="movie--info d-flex flex-row justify-content-between">
                <div className="movie--info">
                  Language: {data.original_language.toUpperCase()}
                </div>
                <div className="movie--info">{data.release_date}</div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieDetail