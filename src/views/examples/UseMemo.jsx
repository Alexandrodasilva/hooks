import React, { useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function sum(a,b){
    const future = Date.now() + 2000;
    while(Date.now() < future){} // 2 seg...
    return(a + b);
}

const UseMemo = (props) => {
    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);
    const [n3, setN3] = useState(0);

    const result =  useMemo( _ => sum(n1, n2), [n1, n2]);
    // Esse problema esta gerando uma demora de 2 segundos ou mais na adição de 1 em 1 nos campos,
    // nesse caso tem uma função que depende de n1 e n2 que gera em n3 uma demora, para isso 
    // pode usar o useState e useEffect ou o useMemo.
     

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <div className="center">
                <input type="number" className="input" 
                value={n1} onChange={ e => setN1(parseInt(e.target.value))}
                />
                <input type="number" className="input" 
                value={n2} onChange={ e => setN2(parseInt(e.target.value))}
                />
                <input type="number" className="input" 
                value={n3} onChange={ e => setN3(e.target.value)}
                />
                <span className="text">{result}</span>
            </div>
        </div>   
    )
}

export default UseMemo
