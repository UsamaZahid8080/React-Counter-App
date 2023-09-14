import React from 'react'
import "./CounterApp.css"
import { useState } from 'react'

function CounterApp() {
    let [count, setCount] = useState(0);
    return (
        <>
            <div className='container my-5'>
                <div className='card shadow-lg'>
                    <div className='card-body'>
                        <h1 style={{color:"IndianRed"}} className='app'>Counter App</h1>
                        <h1>{count}</h1>
                        <button className="btn btn-success rounded-0 btn1" onClick={() => setCount(count + 1)}>Increment</button>
                        <button className="btn btn-danger rounded-0 mx-5 btn1" onClick={() => setCount(count - 1)}
                            disabled={count === 0}>Decrement</button>
                        <button className="btn btn-primary rounded-0 me-4 btn1" onClick={() => setCount(0)} disabled={count === 0}>reset</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default CounterApp