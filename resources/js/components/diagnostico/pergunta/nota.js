const Nota = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [bgColor, setBgColor] = useState(null);
    const [notas, setNotas] = useState([]);
    const [resposta, setResposta] = useState(0);

    useEffect(() => {
        //setResposta(context.getResposta())
    }, []);

    useEffect(() => {
        let newNotas = [];
        let start = props.minimo > 0 ? props.minimo : 1;
        for(let i = start; i <= props.maximo; i++){
            newNotas.push(i);
        }
        setNotas(newNotas);
    }, [props.minimo, props.medio, props.maximo]);

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
            <p className="mb-3"><strong>P{context.dimensao.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.descricao}</p>

            {
                (props.naoSeAplica) ? (
                    <div className="form-check  float-end">
                        <input className="form-check-input" type="radio"
                               name={name}
                               id={name+"_2"}
                               value={props.minimo}
                               onClick={handleResposta}
                               defaultChecked={context.verificarResposta(props.id, "0")}
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
