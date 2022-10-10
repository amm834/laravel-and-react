const Alert = ({type, children}) => {
    return (
        <>
            <div className={`alert alert-${type}`} role="alert">
                {children}
            </div>
        </>
    )
}


export default Alert;