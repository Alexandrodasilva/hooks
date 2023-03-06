import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

function calculaFat(num){
    const n = parseInt(num)
    if( n < 0) return -1;
    if(n === 0) return 1;
    return calculaFat(n -1)*n;
}
function calcularParImpar(num){
    const n = parseInt(num)
    if(n % 2 == 0 ){
        return 1
    }else{
        return -1
    }
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(0);
    const [fatorial, setFatorial] = useState(0);
    const [parImpar, setParImpar] = useState(0);

    useEffect(function(){
        setFatorial(calculaFat(number))
    }, [number])
    
    useEffect(function(){
        if(fatorial > 1000){
            document.title = `${number}`
        }
    }, [fatorial])


    useEffect(function(){
        setParImpar(calcularParImpar(number))
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01"></SectionTitle>
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
            <SectionTitle title="Exercício 02"></SectionTitle>
            <div className="center">
                <div>
                    <span className='text'>Status:</span>
                    <span className='text red'>{parImpar === 1 ? "Par" : "Impar"}</span>
                </div>
            </div>
        </div>
    )
}

export default UseEffect
