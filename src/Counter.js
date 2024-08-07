import { useState } from "react"

function Counter() {
    var [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    return(
    <div>
        <h1 >{count}</h1>
        <button className="one" onClick={increment}>INC</button>
        <button className="two" onClick={decrement}>DEC</button>
    </div>)

}
export default Counter