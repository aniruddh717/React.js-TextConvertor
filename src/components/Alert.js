import React from "react";

function Alert(props) {

  const capitalize = (word) =>{        //to capitalize the 1st letter of a word
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1); 
  }

  return (
    props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
    </div>
  );
}

export default Alert;
