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
                        <button type="button" className="btn btn-outline-info btns">Clear</button>
                        <button type="button" className="btn btn-outline-info btns">Delete</button>
                        <button type="button" className="btn btn-outline-info btns">%</button>
                        <button type="button" className="btn btn-outline-info btns">=</button>
                    </div>

                    <div className="btns-r2">
                        <button type="button" className="btn btn-outline-info btns">1</button>
                        <button type="button" className="btn btn-outline-info btns">2</button>
                        <button type="button" className="btn btn-outline-info btns">3</button>
                        <button type="button" className="btn btn-outline-info btns">/</button>
                    </div>

                    <div className="btns-r3">
                        <button type="button" className="btn btn-outline-info btns">4</button>
                        <button type="button" className="btn btn-outline-info btns">5</button>
                        <button type="button" className="btn btn-outline-info btns">6</button>
                        <button type="button" className="btn btn-outline-info btns">X</button>
                    </div>

                    <div className="btns-r4">
                        <button type="button" className="btn btn-outline-info btns">7</button>
                        <button type="button" className="btn btn-outline-info btns">8</button>
                        <button type="button" className="btn btn-outline-info btns">9</button>
                        <button type="button" className="btn btn-outline-info btns">-</button>
                    </div>

                    <div className="btns-r5">
                        <button type="button" className="btn btn-outline-info btns">0</button>
                        <button type="button" className="btn btn-outline-info btns">00</button>
                        <button type="button" className="btn btn-outline-info btns">.</button>
                        <button type="button" className="btn btn-outline-info btns">+</button>
                    </div>

                </div>
            </div>

        </>
    )
}
