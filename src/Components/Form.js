import React, { useState } from 'react'

export default function Form(props) {
    const areachange = (event) => {
        setText(event.target.value)
        console.log("textarea is changed");
    }
    const btnupclicked = () => {
        // console.log("something is changed" + text);
        let uppercase = text.toUpperCase();
        setText(uppercase)

        console.log("btn in sclicked");

    }
    const clearbtn = () => {
        setText('')
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard!", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    const btnlowclicked = () => {

        let lowercase = text.toLowerCase();
        setText(lowercase)


    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div className="mb-3">
                    <textarea className="form-control" id="Textarea1" value={text} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onChange={areachange} rows="8"></textarea>
                </div>
                <button type="button" disabled={text.length === 0} className="btn btn-primary" onClick={btnupclicked}>UpperCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary" onClick={btnlowclicked}>lowerCase</button>
                <button type="button" disabled={text.length === 0} className="btn btn-primary" onClick={clearbtn}>Clear All</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                {/* <button type="button" className="btn btn-primary" onClick={bold}>Bold All</button> */}

                <p>text summary is : {text.length}  characters      and      {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length}   words</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>

            </div>

        </>

    )
}
