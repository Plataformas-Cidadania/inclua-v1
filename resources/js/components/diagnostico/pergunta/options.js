const Options = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [naoSeAplica, setNaoSeAplica] = useState(false);
    const [resposta, setResposta] = useState(null);

    const handleResposta = (e) => {
        setResposta(e.target.value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>P{context.dimensao.info.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.titulo}</p>
            <div className="form-check float-start">
                <input className="form-check-input" type="radio" name="flexRadioDefault"
                       id="flexRadioDefault1" value="1" onChange={handleResposta}/>
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                    Sim
                </label>
            </div>
            <div className="form-check  float-end">
                <input className="form-check-input" type="radio" name="flexRadioDefault"
                       id="flexRadioDefault2" value="2" checked onChange={handleResposta}/>
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Não
                </label>
            </div>
            <div className="clear-both">&nbsp;</div>
        </div>
    );
};
