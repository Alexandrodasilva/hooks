import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/PageTitle'

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current ++;
    }, [value1])
    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio #01"></SectionTitle>
            <div className="center">
                <div>
                    <span className="text">valor: </span>
                    <span className="text">{value1} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="text" 
                value={value1} onChange ={ e => setValue1(e.target.value)}/>
            </div>
        </div>
    )
}

export default UseRef
// por que ref, porque ref é uma referencia de um objeto que esse objeto tem um atributo, que nesse atributo pode ser um string, objeto, array
