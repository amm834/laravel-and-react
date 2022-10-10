import {useState} from "react";

const ShowInfo = ({state, changeState}) => {
    return (
        <div className="container my-5">
            <div>{state.name}</div>
            <div>{state.age}</div>
            <button className="btn btn-primary" onClick={changeState}>Change</button>
        </div>
    )
}

const App = () => {
    const [state, setState] = useState({
        name: 'Mg Mg',
        age: 20
    })

    const changeState = () => {
        setState(() => {
            return {
                name: 'Hla Hla',
                age: 30
            }
        })
    }

    const [count, setCount] = useState(0)

    function add() {
        if (count === 100) return;
        setCount(() => count + 25)
    }

    function remove() {
        if (count === 0) return;
        setCount(() => count - 25)
    }

    return (
        <div className="container">
            <ShowInfo state={state} changeState={changeState}/>
            <div className="progress">
                <div className={`progress-bar w-${count}`} role="progressbar" aria-label="Basic example"
                     aria-valuenow="0"
                     aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <div className="my-3">
                <button className="btn btn-success mx-3" onClick={add}>+ Add</button>
                <button className="btn btn-danger" onClick={remove}>- Remove</button>
            </div>
        </div>
    )
}


export default App;