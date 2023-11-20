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
    const handleCapClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText='' ;
        setText(newText)
    }
    const handlestyClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText= `<span style="font-style: italic;">${text}</span>`;
        setText(newText)
    }

    const handleOnChange=(event)=>{
        console.log("on chnage");
        setText(event.target.value)
    }
    const handlecopy=()=>{
        console.log("on chnage");
        // setText(event.target.value)
        var text=document.getElementById("my-box");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces=()=>{
        console.log("on chnage");
        let newText=text.split(/[ ]+/);

        setText(newText.join(" "));
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
 <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to uppercase</button>
 <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to lowercase</button>
 <button className="btn btn-primary mx-1" onClick={handleCapClick} >Clear Text</button>
 <button className="btn btn-primary mx-1" onClick={handlestyClick} >style ur Text</button>
 <button className="btn btn-primary mx-1" onClick={handlecopy} >copy ur Text</button>
 <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extraspaces</button>
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
