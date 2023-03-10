import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/PageTitle'

const merge = function(s1, s2){
    return s1 + s2;
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");

    const count = useRef(0);
    const myinput1 = useRef(0);
    const myinput2 = useRef(0);

    useEffect(() => {
        count.current ++;
        myinput1.current.focus();
    }, [value1]);

    useEffect(() => {
        count.current ++;
        myinput2.current.focus(); //
    }, [value2]);

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
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>
                <input type="text" className="text" 
                ref={myinput1}
                value={value1} onChange ={ e => setValue1(e.target.value)}/>
            </div>
            <SectionTitle title="Exercico #02"></SectionTitle>
            <div className="center">
                <div>
                    <input type="text" className="text" 
                    ref={myinput2}
                        value={value2} onChange ={ e => setValue2(e.target.value)}/>
                </div>
            </div>
        </div>
    )
}

export default UseRef
// por que ref, porque ref é uma referencia de um objeto que esse objeto tem um atributo, que nesse atributo pode ser um string, objeto, array
