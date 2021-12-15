const Options = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [showSubPerguntas, setShowSubPerguntas] = useState(false);
    const [resposta, setResposta] =useState(props.resposta);

    useEffect(() => {
        console.log('======================',props);
        setShowSubPerguntas(props.resposta === props.maximo);
        setResposta(props.resposta);
    },[props.resposta]);

    /*const handleResposta = (e) => {
        console.log('handleResposta', e.target.value, props.maximo, e.target.value === props.maximo);
        setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
        context.setResposta(props.id, e.target.value);
    }*/

    const selectResposta = (value) => {
        //console.log('handleResposta', value, props.maximo, value === props.maximo);
        setShowSubPerguntas(parseInt(value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
        context.setResposta(props.id, value);
        setResposta(value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>({props.id})P{context.dimensao.numero}.{context.indicador.numero}{props.letra}</strong> {props.descricao}</p>

            <ul className="radio">
                {
                    (props.naoSeAplica) ? (
                        <li onClick={() => selectResposta(null)}>
                            <div className={resposta === null ? props.bgColor : ''}/><p>Não se aplica</p>
                        </li>
                    ) : null
                }
                <li onClick={() => selectResposta(props.inverter ? props.minimo : props.maximo)}>
                    <div  className={(resposta ===  (props.inverter ? props.minimo : props.maximo)) ? props.bgColor : ''}/><p>Sim</p>
                </li>
                <li onClick={() => selectResposta(props.inverter ? props.maximo : props.minimo)}>
                    <div className={(resposta ===  (props.inverter ? props.maximo : props.minimo)) ? props.bgColor : ''}/><p>Não</p>
                </li>
            </ul>
            <div className="clear-both">&nbsp;</div>
            {
                showSubPerguntas ? (
                    <Perguntas perguntas={props.perguntas} bgColor={props.bgColor} subperguntas={true}/>
                ) : null
            }
        </div>
    );
};
