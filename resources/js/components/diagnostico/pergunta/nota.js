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
        if(props.id){
            setResposta(context.getResposta(props.id));
        }
    }, [props.id]);

    useEffect(() => {
        let newNotas = [];
        //let start = props.minimo > 0 ? props.minimo : 1;
        for(let i = props.minimo; i <= props.maximo; i++){
            newNotas.push(i);
        }
        setNotas(newNotas);
        console.log(props);
        console.log('INVERTER', props.inverter);
        if(props.inverter){
            console.log('INVERTIDOS ..................');
            let newValoresInvertidos = [];
            for(let i = props.maximo; i <= props.minimo; i--){
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

    const handleResposta = (e) => {
        console.log('handleResposta');
        console.log(e.target.value, props.maximo, e.target.value === props.maximo);
        setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
        context.setResposta(props.id, e.target.value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>({props.id})P{context.dimensao.numero}.{context.indicador.numero}{props.letra}</strong> {props.descricao}</p>

            {
                (props.naoSeAplica) ? (
                    <div className="form-check  float-end">
                        <input className="form-check-input" type="radio"
                               name={name}
                               id={name+"_2"}
                               value={""}
                               onClick={handleResposta}
                               defaultChecked={context.verificarResposta(props.id, "")}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Não se aplica
                        </label>
                    </div>
                ) : null
            }

            <div>
                <br/>
                <div className="range-merker" style={{width: '113%', marginLeft: '-80px'}}>
                    {
                        notas.map((nota, key) => {
                            let valor = props.invertido ? valoresInvertidos[key] : nota;
                            return(
                                <div key={'P'+context.dimensao.numero+context.indicador.numero+props.letra} className="form-check  float-end">
                                    <input className="form-check-input" type="radio"
                                           name={'P'+context.dimensao.numero+context.indicador.numero+props.letra}
                                           id={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_"+key}
                                           value={valor}
                                           onChange={handleResposta}
                                           defaultChecked={context.verificarResposta(props.id, valor)}
                                    />
                                    <label className="form-check-label" htmlFor="flexRadioDefault2">
                                        {nota}
                                    </label>
                                </div>

                            );
                        })
                    }
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
