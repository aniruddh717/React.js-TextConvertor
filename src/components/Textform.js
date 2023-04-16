import React, { useState } from "react";

export default function Textform(props) {       

    const handleUpClick = () => {           //converts lower case to upper case
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success");
    }
    
    const handleLoClick = () => {           //converts upper case to lower case
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleOnChange = (event) => {     //let us write into the text area
        setText(event.target.value)
    }

    const handleCopy = () =>{
        let text = document.getElementById("my-box");
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const handleClear = () =>{
        let newText = ' ';
        setText(newText)
        props.showAlert("Text Cleared!", "success");
    }

    const [text, setText] = useState('');

  return (
    <>
    <div className="container" style={{color: props.mode==='light'?'#042743':'white'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="my-box"
          rows={8}
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'#042743':'white'}}
  
        />
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
      <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#042743':'white'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter some text in the textbox"}</p>
    </div>
   
   </>
  );
}
