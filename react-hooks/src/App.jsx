import {useEffect, useState} from "react";

const App = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
    })

    return (
        <>
            {
                isLoading ? 'Loading' : 'Data was fetched'
            }
        </>
    )
}


export default App

