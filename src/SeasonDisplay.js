import React from 'react';
import './SeasonDisplay.css'

const seasonConfig = {
  Summer:{
    text: "Yay, it is beach time",
    iconName: "sun"
  },
  Winter:{
    text: "Pretty Chill Outside",
    iconName: "snowflake"
  },
};

const getSeason = (lat,month) => {
  if (month >2 && month<9){
    return lat > 0 ? "Summer" : "Winter"
  }
  else{
    return lat > 0 ? "Winter" : "Summer" 
  };
};
const SeasonDisplay = ({lat}) => {
  const season = getSeason(lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season]
  return(
    <div className={`season-display ${season}`}>
      <i className={`${iconName} massive icon go-left`}></i>
      <h1>{text}</h1> 
      <i className={`${iconName} massive icon go-right`}></i>
    </div>
  );
};


export default SeasonDisplay;