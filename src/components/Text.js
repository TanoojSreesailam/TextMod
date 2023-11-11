import React, {useState} from 'react';


export default function Text(props) {
    const [text, setText] = useState('');
    const change = (e)=>{
        setText(e.target.value)
    }
    const upper = (e) =>{
        console.log("clicked")
        let hText = text.toUpperCase();
        setText(hText)
        props.showAlert("Converted to uppercase", "success");
        
    }
    const lower = () =>{
        let lText = text.toLowerCase();
        setText(lText)
        props.showAlert("Converted to lowercase", "success");
    }
    const clear = () =>{
        let clr = '';
        setText(clr)
        props.showAlert("Cleared the entire text", "warning");
    }
    const copy = () =>{
        var t = document.getElementById('box');
        t.select();
        navigator.clipboard.writeText(t.value);
        props.showAlert("Copied the text", "success");

    }
    const extraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces between the text", "success");
    }
    return (
        <div>
            <h4>{props.heading}</h4>
            <div className="mb-3">
            <textarea className="form-control my-3" id="box" rows="10" value={text} onChange={change} style = {{ backgroundColor : props.mode === 'dark'? '#212529': 'white', color : props.mode === 'light'? 'black': 'white'}} placeholder='Enter text here'></textarea>
            </div>
            <p>{text.split(" ").filter((a)=>{return a.length!==0}).length} words and {text.length} charcters</p>
            <button disabled = {text.length===0} className="btn btn-secondary " onClick={upper}  >Convert to uppercase</button>
            <button disabled = {text.length===0} className="btn btn-secondary mx-2 my-1" onClick={lower} >Convert to lowercase</button>
            <button  disabled = {text.length===0} className="btn btn-secondary " onClick={copy} >Copy text</button>
            <button  disabled = {text.length===0} className="btn btn-secondary mx-2 my-1" onClick={extraSpace} >Remove extra spaces</button>
            <button disabled = {text.length===0} className="btn btn-secondary" onClick={clear} >Clear text</button>
            <h4 className='my-3'>Preview</h4>
            <p>{text.length>0 ? text : "Empty"}</p>
        </div>
    )
}
