const Options = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [naoSeAplica, setNaoSeAplica] = useState(false);
    const [name, setName] = useState(null);

    useEffect(() => {
        setName(context.dimensao.info.dimensao+'_'+context.indicador.indicador+'_'+props.letra);
    }, [context]);

    const handleResposta = (e) => {
        context.setResposta(props.id, e.target.value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>P{context.dimensao.info.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.titulo}</p>
            {
                (props.minimo === props.medio) ? (
                    <div className="form-check  float-end">
                        <input className="form-check-input" type="radio"
                               name={name}
                               id={name+"_2"}
                               value={props.minimo}
                               onClick={handleResposta}
                               defaultChecked={context.verificarResposta(props.id, props.minimo)}
                        />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            Não se aplica
                        </label>
                    </div>
                ) : null
            }
            <div className="form-check float-start">
                <input className="form-check-input" type="radio"
                       name={name}
                       id={name+"_1"}
                       value={props.maximo}
                       onClick={handleResposta}
                       defaultChecked={context.verificarResposta(props.id, "1")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Sim
                </label>
            </div>
            <div className="form-check  float-end">
                <input className="form-check-input" type="radio"
                       name={name}
                       id={name+"_2"}
                       value={props.minimo}
                       onClick={handleResposta}
                       defaultChecked={context.verificarResposta(props.id, "2")}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Não
                </label>
            </div>
            <div className="clear-both">&nbsp;</div>
        </div>
    );
};
