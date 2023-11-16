import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLoClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("on chnage");
        setText(event.target.value)
    }

    const[text,setText]=useState('');
  return (
    <>
 <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
<label for="my-box" class="form-label">Example textarea</label>
  <textarea className="form-control" id="my-box" onChange={handleOnChange} rows="9"
  value={text}
  ></textarea>
</div>
 <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
 <button className="btn btn-primary" onClick={handleLoClick} >Convert to lowercase</button>
    </div>


    <div className="container my-3">
        <h1>your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}  time to read</p>
        <h2>preview</h2>
        <p>{text}</p>
    </div>
    </>
 )
}
