import React from 'react'

export default function Calculator() {
    return (
        <>
            <div className="container outer-box">

                <div className="form-floating textarea">
                    <textarea className="form-control io-textarea" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                </div>

                <div className="btn-grp">
                    
                    <div className='btn-r1'>
                        <button type="button" className="btn btn-outline-success btns">Clear</button>
                        <button type="button" className="btn btn-outline-success btns">Check</button>
                        <button type="button" className="btn btn-outline-success btns">%</button>
                        <button type="button" className="btn btn-outline-success btns">=</button>
                    </div>

                    <div className="btns-r2">
                        <button type="button" className="btn btn-outline-success btns">1</button>
                        <button type="button" className="btn btn-outline-success btns">2</button>
                        <button type="button" className="btn btn-outline-success btns">3</button>
                        <button type="button" className="btn btn-outline-success btns">/</button>
                    </div>

                    <div className="btns-r3">
                        <button type="button" className="btn btn-outline-success btns">4</button>
                        <button type="button" className="btn btn-outline-success btns">5</button>
                        <button type="button" className="btn btn-outline-success btns">6</button>
                        <button type="button" className="btn btn-outline-success btns">X</button>
                    </div>

                    <div className="btns-r4">
                        <button type="button" className="btn btn-outline-success btns">7</button>
                        <button type="button" className="btn btn-outline-success btns">8</button>
                        <button type="button" className="btn btn-outline-success btns">9</button>
                        <button type="button" className="btn btn-outline-success btns">-</button>
                    </div>

                    <div className="btns-r5">
                        <button type="button" className="btn btn-outline-success btns">0</button>
                        <button type="button" className="btn btn-outline-success btns">00</button>
                        <button type="button" className="btn btn-outline-success btns">.</button>
                        <button type="button" className="btn btn-outline-success btns">+</button>
                    </div>

                </div>
            </div>

        </>
    )
}
