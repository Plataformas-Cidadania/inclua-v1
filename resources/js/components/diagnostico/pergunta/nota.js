const Nota = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [name, setName] = useState(null);
    const [bgColor, setBgColor] = useState(null);
    const [notas, setNotas] = useState([]);
    const [valoresInvertidos, setValoresInvertidos] = useState([]);
    const [resposta, setResposta] = useState(0);
    const [showSubPerguntas, setShowSubPerguntas] = useState(false);

    useEffect(() => {
        //console.log('======================',props);
        setShowSubPerguntas(props.resposta === props.maximo);
        setResposta(props.resposta);
    },[props.resposta]);

    useEffect(() => {
        let newNotas = [];
        //let start = props.minimo > 0 ? props.minimo : 1;
        for(let i = props.minimo; i <= props.maximo; i++){
            newNotas.push(i);
        }
        setNotas(newNotas);
        //console.log(props);
        //console.log('INVERTER', props.inverter);
        if(props.inverter){
            //console.log('INVERTIDOS ..................');
            let newValoresInvertidos = [];
            for(let i = props.maximo; i >= props.minimo; i--){
                newValoresInvertidos.push(i);
            }
            setValoresInvertidos(newValoresInvertidos);
        }
    }, [props.minimo, props.maximo]);

    useEffect(() => {
        setName(context.dimensao.dimensao+'_'+context.indicador.indicador+'_'+props.letra);
    }, [context]);

    useEffect(() => {
        setBgColor(props.bgColor);
    }, [props.bgColor]);

    const selectResposta = (value) => {
        //console.log('handleResposta', value, props.maximo, value === props.maximo);
        setShowSubPerguntas(parseInt(value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
        context.setResposta(props.id, value);
        setResposta(value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>({props.id})P{context.dimensao.numero}.{context.indicador.numero}{props.letra}</strong> {props.descricao}</p>
            <p>{props.legenda}</p>

            {
                (props.naoSeAplica) ? (
                    <li onClick={() => selectResposta(null)}>
                        <div className={resposta === null ? props.bgColor : ''}/><p>Não se aplica</p>
                    </li>
                ) : null
            }

            <div>
                <br/>
                <div className="range-merker" style={{width: '113%', marginLeft: '-80px'}}>
                    <ul className="radio">
                        {
                            notas.map((nota, key) => {
                                let valor = props.inverter ? valoresInvertidos[key] : nota;
                                //console.log(resposta, valor);
                                return(
                                    <li key={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_"+key} onClick={() => selectResposta(valor)}>
                                        <div  className={resposta ===  valor ? props.bgColor : ''}/><p>{nota}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="clear-both">&nbsp;</div>
            {
                showSubPerguntas ? (
                    <Perguntas perguntas={props.perguntas} bgColor={props.bgColor}/>
                ) : null
            }
        </div>
    );
};
