import React, { useState } from 'react'

export default function Form() {
    const areachange = (event) => {
        setText(event.target.value)
        console.log("textarea is changed");
    }
    const btnupclicked = () => {
        console.log("something is changed" + text);
        let uppercase = text.toUpperCase();
        setText(uppercase)

        console.log("btn in sclicked");

    }
    const clearbtn = () => {
        setText('')
    }


    // const nospace = () => {
    //     if(nospace){
    //         text.split('  ')
    //     }
    //     setText(text.split(" "))
    // }

    const bold = () => {
        let boldtext = text.bold();
        setText(boldtext)
    }

    const btnlowclicked = () => {
        console.log("something is changed" + text);
        let lowercase = text.toLowerCase();
        setText(lowercase)

        // console.log("btn in sclicked");

    }
    const [text, setText] = useState('');
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <textarea className="form-control" id="Textarea1" value={text} onChange={areachange} rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary" onClick={btnupclicked}>UpperCase</button>
                <button type="button" className="btn btn-primary" onClick={btnlowclicked}>lowerCase</button>
                <button type="button" className="btn btn-primary" onClick={clearbtn}>Clear All</button>
                {/* <button type="button" className="btn btn-primary" onClick={bold}>Bold All</button> */}
                {/* <button type="button" className="btn btn-primary" onClick={nospace}>No Extra Space</button> */}
                <p>text summary is : {text.length}  characters      and      {text.split(" ").length}   words</p>
            </div>





        </>

    )
}
