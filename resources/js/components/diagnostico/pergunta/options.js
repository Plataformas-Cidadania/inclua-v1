const Options = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [name, setName] = useState(null);
    const [showSubPerguntas, setShowSubPerguntas] = useState(false);

    useEffect(() => {
        setName(context.dimensao.dimensao+'_'+context.indicador.indicador+'_'+props.letra);
    }, [context]);

    const handleResposta = (e) => {
        console.log(e.target.value, props.maximo, e.target.value === props.maximo);
        setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo));//clicando no sim que possui o valor máximo irá mostrar as subperguntas
        context.setResposta(props.id, e.target.value);
    }


    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>P{context.dimensao.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.descricao}</p>
            {
                (props.naoSeAplica) ? (
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
            {
                showSubPerguntas ? (
                    <Perguntas perguntas={props.perguntas} bgColor={props.bgColor}/>
                ) : null
            }
        </div>
    );
};
