const Range = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [bgColor, setBgColor] = useState(null);
    const [name, setName] = useState(null);
    const [range, setRange] = useState([]);
    const [resposta, setResposta] = useState(0);

    useEffect(() => {
        if(props.id){
            setResposta(context.getResposta(props.id))
        }
    }, [props.id]);

    useEffect(() => {
        let newRange = [];
        let start = props.minimo > 0 ? props.minimo : 1;
        for(let i = start; i <= props.maximo; i++){
            newRange.push(i);
        }
        setRange(newRange);
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
                <div className="range-merker">
                    {
                        range.map((item, key) => {
                            return(
                                <div key={'nota_'+props.letra+key} className="range-merker-box">
                                    <div
                                        className={"range-merker-box-item " + (resposta === item ? bgColor : '')}
                                        onClick={() => clickResposta(item)}
                                        style={{cursor: 'pointer'}}
                                    >
                                        {item}
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
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
