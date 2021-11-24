const Nota = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [bgColor, setBgColor] = useState(null);
    const notas = ['1', '2', '3', '4', '5'];
    const [resposta, setResposta] = useState(0);

    useEffect(() => {
        setResposta(context.getResposta())
    }, []);

    useEffect(() => {
        setBgColor(props.bgColor);
    }, [props.bgColor]);

    const handleResposta = (e) => {
        context.setResposta(props.id, e.target.value);
        setResposta(e.target.value)
    }

    const clickResposta = (nota) => {
        context.setResposta(props.id, nota);
        setResposta(nota)
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>P{context.dimensao.info.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.titulo}</p>
            <div>
                <br/>
                <div className="range-merker" style={{width: '113%', marginLeft: '-80px'}}>
                    {
                        notas.map((nota) => {
                            return(
                                <div className="range-merker-box">
                                    <div
                                        className={"range-merker-box-item " + (resposta === nota ? bgColor : '')}
                                        onClick={() => clickResposta(nota)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        {nota}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
                {/*<label for="customRange1" className="form-label">Bom</label>*/}
                <br/>
                <input type="range" className="form-range range" id="customRange1" min="1" max="5" value={resposta} onChange={handleResposta}/>
            </div>
        </div>
    );
};
