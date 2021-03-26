import React from 'react';
//Loading Component

const Loader = ({message}) => {
  return(
    <div className="ui active dimmer">
      <div className="ui massive text loader">{message}</div>
    </div>
  )
}

Loader.defaultProps = {
  message: "Loading . . ."
}

export default Loader;
