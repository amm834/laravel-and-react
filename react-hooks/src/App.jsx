import {useEffect, useState} from "react";
import axios from "axios";

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function fetchTodos() {
            const {data: todos} = await axios.get('https://jsonplaceholder.typicode.com/todos')
            setTodos(todos)
            setIsLoading(false)
        }

        fetchTodos()

    }, [])

    return (
        <>
            {isLoading ? 'Loading' : todos.map(todo => (
                <div className="card" key={todo.id}>
                    <div className="card-body">
                        {todo.title}
                    </div>
                </div>
            ))}
        </>
    )
}


export default App

