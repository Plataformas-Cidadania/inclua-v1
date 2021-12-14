const Nota = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [name, setName] = useState(null);
    const [bgColor, setBgColor] = useState(null);
    const [notas, setNotas] = useState([]);
    const [resposta, setResposta] = useState(0);

    useEffect(() => {
        if(props.id){
            setResposta(context.getResposta(props.id));
        }
    }, [props.id]);

    useEffect(() => {
        let newNotas = [];
        let start = props.minimo > 0 ? props.minimo : 1;
        for(let i = start; i <= props.maximo; i++){
            newNotas.push(i);
        }
        setNotas(newNotas);
    }, [props.minimo, props.maximo]);

    useEffect(() => {
        setName(context.dimensao.dimensao+'_'+context.indicador.indicador+'_'+props.letra);
    }, [context]);

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
                        notas.map((nota, key) => {
                            return(
                                <div key={'range_'+props.letra+key} className="range-merker-box">
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
                <input
                    type="range"
                    className="form-range range"
                    id="customRange1"
                    min={props.minimo}
                    max={props.maximo}
                    value={resposta ? resposta : 0}
                    onChange={handleResposta}
                />
            </div>

        </div>
    );
};
