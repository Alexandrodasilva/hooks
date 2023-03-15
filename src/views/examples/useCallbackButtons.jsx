import React from "react";

const UseCallbackButtons = props => {
    console.log("render...")
    return(
        <div>
        <button className="btn"
        onClick={ _ => props.inc(6)}
        >+6</button>
        <button className="btn"
        onClick={ _ => props.inc(6)}
        >+12</button>
        <button className="btn"
        onClick={ _ => props.inc(6)}
        >+18</button>
    </div>
    )
}

export default React.memo(UseCallbackButtons);