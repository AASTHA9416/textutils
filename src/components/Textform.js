import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("on chnage");
        setText(event.target.value)
    }
    const[text,setText]=useState('enter the text');
  return (
 <div>
    <h1>{props.heading}</h1>
<div className="mb-3">
<label for="my-box" class="form-label">Example textarea</label>
  <textarea className="form-control" id="my-box"value={text} onChange={handleOnChange} rows="9"></textarea>
</div>
 <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
    </div>
 )
}
