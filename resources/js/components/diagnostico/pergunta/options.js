const Options = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [showSubPerguntas, setShowSubPerguntas] = useState(false);

    const handleResposta = (e) => {
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
                               name={'P'+context.dimensao.numero+context.indicador.numero+props.letra}
                               id={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_0"}
                               value={0}
                               onChange={handleResposta}
                               defaultChecked={context.verificarResposta(props.id, 0)}
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
                       value={props.inverter ? props.minimo : props.maximo}
                       onChange={handleResposta}
                       defaultChecked={context.verificarResposta(props.id, props.inverter ? props.minimo : props.maximo)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Sim
                </label>
            </div>
            <div className="form-check  float-end">
                <input className="form-check-input" type="radio"
                       name={'P'+context.dimensao.numero+context.indicador.numero+props.letra}
                       id={'P'+context.dimensao.numero+context.indicador.numero+props.letra+"_2"}
                       value={props.inverter ? props.maximo : props.minimo}
                       onChange={handleResposta}
                       defaultChecked={context.verificarResposta(props.id, props.inverter ? props.maximo : props.minimo)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Não
                </label>
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
