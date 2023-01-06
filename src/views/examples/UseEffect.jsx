import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function calculaFat(num){
    const n = parseInt(num)
    if( n === -1) return
    if(n ===1) return 1;
    if(n === 0) return 1;
    return calculaFat(n -1)*n;
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(0)

    useEffect(function(){
        setFatorial(calculaFat(number))
    }, [number])
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial === -1 ?  "não existe": fatorial}</span>
                </div>
                <input type="number" className="input" 
                    value={number}
                    onChange={e => setNumber(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseEffect
