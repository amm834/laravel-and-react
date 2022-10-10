import {useReducer} from "react";

const countReducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {
                count: state.count + 1,
                isOdd: state.count % 2 === 0
            }
        case 'REMOVE':
            return {
                count: state.count - 1,
                isOdd: state.count % 2 === 0
            }
    }
}
const App = () => {
    const [state, dispatchCount] = useReducer(countReducer, {
        count: 0,
        isOdd: false
    })
    return (
        <div className="container my-4 d-flex flex-column">
            <h1>{state.count}</h1>
            <p>{state.isOdd ? 'Odd' : 'Even'}</p>
            <div>
                <button className="btn btn-danger mx-2" onClick={() => dispatchCount({type: 'REMOVE'})}>-</button>
                <button className="btn btn-success" onClick={() => dispatchCount({type: 'ADD'})}>+</button>
            </div>
        </div>
    )
}

export default App