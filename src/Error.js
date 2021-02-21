import React from 'react';

const Error = ({message}) =>{
  return(
    <div class="ui negative message">
      <i class="icon"></i>
      <div class="header">
        Oops!!!
      </div>
      <p>{message}</p>
  </div>
  );
};

//Adding default props
Error.defaultProps = {
  message: "An error occured"
}

export default Error;
