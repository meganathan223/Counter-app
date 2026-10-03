import { useState } from "react"
import './RandomNum.css'

export default function RandomNum() {

    const [randomNum, setRandomNum] = useState(0);

    const genrateRandomNum = () => {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNum(randomNumber)
    }

    return (
        <div className="random-num-container">
            <h1>Random Number Generator</h1>


            {randomNum === 0 ? (
                <div className="notification">
                    No number generated
                </div>) :
                (<div className="counter-result">{randomNum}</div>
                )}

            <button className="btn btn-random" onClick={genrateRandomNum}>Generate Random Number</button>

        </div>
    )
}