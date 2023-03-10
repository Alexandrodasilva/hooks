import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = (props) => {
    const [count, setCount] = useState(0);

    const inc = delta =>{
        setCount(count + delta)
    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <div className="center">
                <span className="text">{count}</span>
                <div>
                    <button className="btn"
                    onClick={ _ => inc(6)}
                    >+6</button>
                    <button className="btn"
                    onClick={ _ => inc(6)}
                    >+12</button>
                    <button className="btn"
                    onClick={ _ => inc(6)}
                    >+18</button>
                </div>
            </div>
        </div>
    )
}

export default UseCallback
