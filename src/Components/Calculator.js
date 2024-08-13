import { useState } from "react"
import React from 'react'

export default function Calculator() {

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handleClear = ()=>{
        let newText= "";
        setText(newText);
    }

    const handleDelete= ()=>{
        try{
            let newText = text.substring(0,text.length-1);
            setText(newText);
        } catch(err){
            setText(" ");
        }
    }

    const handleEquals= ()=>{
        if (text !== "") { 
            var ans = ""; 
            try { 
                ans = eval(text); 
            } catch (err) { 
                setText("Math Error"); 
            } 
            if (ans === undefined) setText("Math Error"); 
            // update answer in our state. 
            else setText(ans); 
        } 
    }

    const handlebtns = (event)=>{
        let newText= event.target.value;
        setText(text+newText);

    }

    const [text, setText]= useState("");


    return (
        <>
            <div className="container outer-box">

                <div className="form-floating textarea">
                    <textarea className="form-control io-textarea" placeholder="Leave a comment here" id="floatingTextarea" value={text} onChange={handleOnChange}></textarea>
                </div>

                <div className="btn-grp">
                    
                    <div className='btn-r1'>
                        <input type="button" value="Clear" className="btn btn-outline-info btns" onClick={handleClear}/>
                        <input type="button" value="Delete" className="btn btn-outline-info btns" onClick={handleDelete}/>
                        <input type="button" value="%" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="=" className="btn btn-outline-info btns" onClick={handleEquals}/>
                    </div>

                    <div className="btns-r2">
                        <input type="button" value="1" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="2" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="3" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="/" className="btn btn-outline-info btns" onClick={handlebtns}/>
                    </div>

                    <div className="btns-r3">
                        <input type="button" value="4" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="5" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="6" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="X" className="btn btn-outline-info btns" onClick={handlebtns}/>
                    </div>

                    <div className="btns-r4">
                        <input type="button" value="7" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="8" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="9" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="-" className="btn btn-outline-info btns" onClick={handlebtns}/>
                    </div>

                    <div className="btns-r5">
                        <input type="button" value="0" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="00" className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="." className="btn btn-outline-info btns" onClick={handlebtns}/>
                        <input type="button" value="+" className="btn btn-outline-info btns" onClick={handlebtns}/>
                    </div>

                </div>
            </div>

        </>
    )
}
