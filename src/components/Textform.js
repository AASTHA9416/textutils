import React,{useState} from 'react'



export default function Textform(props) {


    const handleUpClick=()=>{
        console.log("uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success")
    }
    const handleLoClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success")

    }
    const handleCapClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText='' ;
        setText(newText);
        props.showAlert("deleted all text","success")

    }
    const handlestyClick=()=>{
        console.log("lowercase was clicked" + text);
        let newText= `<span style="font-style: italic;">${text}</span>`;
        setText(newText);
        props.showAlert("style is chnaged","success")

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
        document.getSelection().removeAllRanges();
        props.showAlert("text is beng copied","success")

    }
    const handleExtraSpaces=()=>{
        console.log("on chnage");
        let newText=text.split(/[ ]+/);

        setText(newText.join(" "));
        props.showAlert("extraspaces are removed","success")

    }

    
    const[text,setText]=useState('');
  return (
    <>
 <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1 className='mb-4'>{props.heading}</h1>
<div className="mb-3">
<label htmlFor="my-box" className="form-label">Example textarea</label>
  <textarea className="form-control" id="my-box" onChange={handleOnChange} rows="9"
  value={text}  style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}}
  ></textarea>
</div>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to lowercase</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapClick} >Clear Text</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlestyClick} >style ur Text</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlecopy} >copy ur Text</button>
 <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extraspaces</button>
    </div>


    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>element.length!==0).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>element.length!==0).length}  time to read</p>
        <h2>preview</h2>
        <p >{text.length>0?text:"nothing to preview"}</p>
    </div>
    </>
 )
}
