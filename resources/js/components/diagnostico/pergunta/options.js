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
            <div className="form-check float-start">
                <input className="form-check-input" type="radio"
                       name={name}
                       id={name+"_1"}
                       value="1"
                       onClick={handleResposta}
                       checked={context.verificarResposta(props.id)}
                />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Sim
                </label>
            </div>
            <div className="form-check  float-end">
                <input className="form-check-input" type="radio"
                       name={name}
                       id={name+"_2"}
                       value="2"
                       checked={context.verificarResposta(props.id)}
                       onClick={handleResposta}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Não
                </label>
            </div>
            <div className="clear-both">&nbsp;</div>
        </div>
    );
};
