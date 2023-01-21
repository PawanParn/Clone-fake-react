function Spinner(){
    return (
        <div className="d-flex flex-column justify-content-center align-items-center offcanvas-backdrop show"
             style={{zIndex : 1200}}    
        >
            <button className="btn btn-warning p-3" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm "></span>
                <span className="p-3">Please wait</span>
            </button>
        </div>
        );
}

export default Spinner;