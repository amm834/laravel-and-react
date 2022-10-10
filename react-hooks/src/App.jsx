import {useRef} from "react";

const App = () => {
    const btnRef = useRef()

    return <button ref={btnRef} onClick={() => btnRef.current.style.backgroundColor = 'green'}>change bg color</button>

}

export default App