const Options = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [showSubPerguntas, setShowSubPerguntas] = useState(false);

    useEffect(() => {
        setShowSubPerguntas(context.getResposta(props.id) === props.maximo);
    },[props]);

    /*const handleResposta = (e) => {
        console.log('handleResposta', e.target.value, props.maximo, e.target.value === props.maximo);
        setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
        context.setResposta(props.id, e.target.value);
    }*/

    const setResposta = (value) => {
        console.log('handleResposta', value, props.maximo, value === props.maximo);
        setShowSubPerguntas(parseInt(value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
        context.setResposta(props.id, value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>({props.id})P{context.dimensao.numero}.{context.indicador.numero}{props.letra}</strong> {props.descricao}</p>
            {
                (props.naoSeAplica) ? (
                    <div className="form-check  float-end">
                        <input className="form-check-input" type="radio"
                               name={'P'+context.dimensao.numero+context.indicador.numero+props.letra}
                               id={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_0"}

                               onClick={() => setResposta(null)}
                               defaultChecked={context.getResposta(props.id) === null}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Não se aplica
                        </label>
                    </div>
                ) : null
            }
            <div className="form-check float-start">
                <input className="form-check-input" type="radio"
                       name={'P'+context.dimensao.numero+context.indicador.numero+props.letra}
                       id={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_1"}
                       onClick={() => setResposta(props.maximo)}
                       defaultChecked={context.getResposta(props.id) === (props.inverter ? props.minimo : props.maximo)}
                />
                <label className="form-check-label" htmlFor={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_1"}>
                    Sim
                </label>
            </div>
            <div className="form-check float-start">
                <input className="form-check-input" type="radio"
                       name={'P'+context.dimensao.numero+context.indicador.numero+props.letra}
                       id={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_2"}
                       onClick={() => setResposta(props.minimo)}
                       defaultChecked={context.getResposta(props.id) === (props.inverter ? props.maximo : props.minimo)}
                />
                <label className="form-check-label" htmlFor={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_2"}>
                    Não
                </label>
            </div>
            {JSON.stringify(context.dimensao.indicadores[0].perguntas[0])}
            {JSON.stringify(context.dimensao.indicadores[1].perguntas[0])}
            <div className="clear-both">&nbsp;</div>
            {
                showSubPerguntas ? (
                    <Perguntas perguntas={props.perguntas} bgColor={props.bgColor} subperguntas={true}/>
                ) : null
            }
        </div>
    );
};
