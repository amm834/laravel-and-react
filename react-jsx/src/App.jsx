import Alert from "./components/Alert.jsx";

function App() {
    const names = ['Mg Mg', 'Aung Aung', 'Hla Hla', 'Mya Mya']
    return (
        <div className="container my-5">
            <Alert type="warning">
                404 not found
            </Alert>
            <Alert type="danger">
                404 not found
            </Alert>

            {/*    looping */}
            <div>
                {names.map(name => <p>{name}</p>)}
            </div>
        </div>
    )
}

export default App
