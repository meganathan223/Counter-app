import { useState } from 'react';
import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);
    const [notification, setNotification] = useState(false);

    const increment = () => {
        setCount(count + 1);
        setNotification(false);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
        else {
            setNotification(true);
            // hide notification after 1.5s
            setTimeout(() => setNotification(false), 1500);
        }
    };

    const reset = () => {
        setCount(0);
        setNotification(false);
    };

    return (
        <div className="counter-container">
            <h1>Counter App</h1>

            <div className="counter-result">{count}</div>

            {notification && (
                <div className="notification">
                    Minimum limit reached!
                </div>
            )}

            <div className="btn-group">
                <button className="btn btn-decrement" onClick={decrement}>−</button>
                <button className="btn btn-reset" onClick={reset}>Reset</button>
                <button className="btn btn-increment" onClick={increment}>+</button>
            </div>
        </div>
    );
}
