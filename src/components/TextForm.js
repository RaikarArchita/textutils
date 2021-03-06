import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase was clicked "+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }
    const handleLowClick = () => {
        //console.log("Uppercase was clicked "+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }
    const handleOnChange = (event) =>{
       //console.log("On Change");
       setText(event.target.value);
       
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text is copied","success");
     }
    const[text,setText] = useState('');
    return (
       <>
        <div className= "container"  style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
           <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange}
             style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}
             id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
           <h2>Your text summary</h2>
           <p>{text.split(" ").length} words, {text.length} characters</p>
           <p>{0.08 * text.split(" ").length} minutes</p>
           <h2>Preview</h2>
           <p>{text.length>0?text:"enter something in above text box"}</p>
        </div>
        </>
    )
}
