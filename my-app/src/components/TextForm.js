import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [textAreaColor, setTextAreaColor] = useState(false);

    const handleUpClick = ()=>{
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase", "success");
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase", "success");
    }

    const handleOnChange = (evt)=>{
        setText(evt.target.value)
    }

    const handleOnClick = ()=>{
        setText("");
        props.showAlert("Text cleared", "success");
    }

    const handleCoClick = ()=>{
        setTextAreaColor(!textAreaColor);
        props.showAlert("Text color has been changed", "success");
    }

    const speak = ()=>{
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    const isDisabled = text.length === 0;

  return (
    <> 
<div className={`container my-3`}>
<div className=" mb-3">
  <label htmlFor="textbox" className="form-label">{props.heading}</label>
  <textarea className={`form-control ${props.theme?"mode":""} ${textAreaColor?"change-color":""}`} id="textbox" placeholder='your text....' rows="8" value={text} onChange={handleOnChange}></textarea>
</div>
<button className={`btn mx-2 my-1 ${props.theme?"btn-mode":""} ${isDisabled?"btn-disabled":""}`} onClick={handleUpClick} disabled = {isDisabled}>
    Convert To UpperCase
</button>
<button className={`btn mx-2 my-1 ${props.theme?"btn-mode":""} ${isDisabled?"btn-disabled":""}`} onClick={handleLoClick} disabled = {isDisabled}>
    Convert To LowerCase
</button>
<button className={`btn mx-2 my-1 ${props.theme?"btn-mode":""} ${isDisabled?"btn-disabled":""}`} onClick={handleOnClick} disabled = {isDisabled}>
    Clear Text
</button>
<button className={`btn mx-2 my-1 ${props.theme?"btn-mode":""} ${isDisabled?"btn-disabled":""}`} onClick={handleCoClick} disabled = {isDisabled}>
    Change Color
</button>
<button className={`btn mx-2 my-1 ${props.theme?"btn-mode":""} ${isDisabled?"btn-disabled":""}`} onClick={speak} disabled = {isDisabled}>
    Speak= 
</button>
</div>
<div className="container my-3">
    <h1>Your Text Summary</h1>
    <ul>
    <p>{text.trim() === ""?0:text.trim().split(" ").length} Words</p>
    <p>{text.length} Characters</p>
    <p>{text.trim()===""?0:0.008* text.trim().split(" ").length} Minutes to read</p>
    </ul>
    <h2>Preview</h2>
    <p>{text}</p>
  
</div>
    </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
};