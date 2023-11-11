import React from 'react'

function Alert(props) {
    return (
        <div style={{height: "50px"}}>
           { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show py-2`} role="alert">
                {props.alert.msg}
                <button type="button" className="btn-close py-2" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
        </div>
    )
}

export default Alert
