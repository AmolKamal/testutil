import React ,{useState} from 'react'


export default function TextForm(props) {
    const handleuclick = () =>{
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase","success");
    }
    const handlelclick = () =>{
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleSpeakClick =()=>{
        window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
        props.showAlert("Speaking","success");
    }
    const handleClear = ()=>{
        setText("");
        props.showAlert("Cleared","success");
    }

    const handleCopy = ()=>{
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success");
    }

    const handleExtraSpaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed","success");
    }


    const handlechange =(event)=>{
        setText(event.target.value);
    }
    const [text,setText] = useState("");
  return (
    <>
    <div className="container" style = {{color : props.mode==='light'?'black':'white' }} > 
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea  className="form-control" value = {text} style = {{backgroundColor : props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black' }} onChange={handlechange} id="myBox" rows="8"></textarea>
        </div>
        <button className={`btn btn-primary mx-2 btn-${props.mode}`} onClick={handleuclick}>Convert to UpperCase</button>
        <button className={`btn btn-primary mx-2 btn-${props.mode}`} onClick={handlelclick}>Convert to LowerCase</button>
        <button className={`btn btn-primary mx-2 btn-${props.mode}`} onClick={handleSpeakClick}>Speak Aloud</button>
        <button className={`btn btn-primary mx-2 btn-${props.mode}`} onClick={handleCopy}>Copy Text</button>
        <button className={`btn btn-primary mx-2 btn-${props.mode}`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>


        <button className={`btn btn-primary mx-2 btn-${props.mode}`} onClick={handleClear}>Clear Text</button>



    </div>
    <div className="container my-5" style = {{color : props.mode==='dark'?'white':'black' }}>
        <h2>Your Text Summary</h2>
        <p> {text.split(" ").length}  words and {text.length} characters </p>
        <p>Average Time required to read: {0.008*text.split(" ").length} minutes. </p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter your text to Preview"}</p>
    </div>
    </>
  )
}
