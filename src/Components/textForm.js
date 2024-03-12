import { useState } from "react"
import React from 'react'

export default function textForm(props) {
  const handleUpClick = ()=>{
    
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("text is in upper case", "Success")
   

  }
  const handleLoClick = ()=>{
    
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("text is in lower case", "Success");

  }
  const Clear = ()=>{
    
    let newText = (' ');
    setText(newText);
    props.showAlert("text is clear", "Allright");
    
    

  }

  const handleCopy = ()=>{
    var newText = document.getElementById("mybox")
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("text is coppied", "Success");


  }
  
  const handleOnChange = ()=>{
    
    setText(event.target.value);

  }
    const[text, setText] = useState('')
    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <div class="mb-3">
                    <label for="mybox" class="form-label"><h3> {props.Heading}</h3></label>
                    <textarea class="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'black':'white', color: props.mode === 'dark'?'white':'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-1" onClick={Clear}>Clear</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
              
            </div>
             <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
              <h2>Your Text Summary</h2>
              <p>{text.split(" ").length} words , {text.length} Charactor</p>
              <p><h3>{0.008*text.split(" ").length } minutes read</h3></p>
              <h2>Preview</h2>
              <p>{text.length>0?text:"Enter Something above to preview it"}</p>
             </div>

        </>
    )
}
