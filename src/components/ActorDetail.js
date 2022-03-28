import Slider from "react-slick";
import { useState } from "react";

const ActorDetail = (props) => {
  const [movieDetailState, setMovieDetailState] = useState();

  let data = props.data

  const settings = {
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    arrows: true,
};
  
  if(data) {
    return(
        <div className="actor--list--container">
          <div className = "container--text">CAST</div>
          <div className = "container--grid"> 
              {data.cast.map((data, index) => (
                  <div className = "actor--outer--container" key = {index}>
                    <div className = "actor--container" >
                        <div className = "actor-avatar">
                            <img className ="actor--img" src = {"https://image.tmdb.org/t/p/original/" +data.profile_path}></img>
                        </div>
                        <div className = "actor--names">
                            <div className = "actor--realName">{data.original_name}</div>
                            <div className = "actor--role">{data.character}</div>
                        </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
    )
  }
  else {
    return(
      <div></div>
    )
  }
};

export default ActorDetail