import React,{useState} from 'react'



export default function Textform(props) {
    const [text,settext] = useState("");
// for uppercase
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        settext(text.toUpperCase());
        props.showAlert("converted to uppercase","success")
    }
    //for lowercase
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        settext(text.toLowerCase());
        props.showAlert("converted to lowercase","success")
    }
//for clear text

    const handleClearClick = () => {
         settext("");
         props.showAlert("clear text","success")
    }

    //for copy text
    const handleCopy = () => {
        var text=document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("converted to uppercase","success")
    }
    // for extra space
    const handleExtraSpaces = () => {
        let newtext = text.split(/[]+/);
        settext(newtext.join(" "))
    }

    const handleonChange = (event) => {
        settext(event.target.value);
    }
  return (
    <>
    <div className="container"style={{color:props.mode==='dark'?'white':'black'}}>
<h1>{props.heading}</h1>
  <div className="mb-3">
   <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'dark':'light'}} id="mybox" rows="8"></textarea>
   </div>
   <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
   <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Extra Spaces</button>
    </div>
    <div className="container my-3"style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and{text.length}characters</p>
        <p>{0.008* text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview"}</p>
    </div>
    </>
  )
}
