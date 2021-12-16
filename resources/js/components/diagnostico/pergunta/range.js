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
        context.setResposta(props.id, parseInt(e.target.value));
        setResposta(parseInt(e.target.value));
    }

    const clickResposta = (nota) => {
        context.setResposta(props.id, nota);
        setResposta(nota)
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>({props.id})P{context.dimensao.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.descricao}</p>

            {
                (props.naoSeAplica) ? (
                    <li onClick={() => selectResposta(null)}>
                        <div className={resposta === null ? props.bgColor : ''}/><p>Não se aplica</p>
                    </li>
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
                    id={'P'+context.dimensao.dimensao+context.indicador.indicador+props.letra}
                    min={props.minimo}
                    max={props.maximo}
                    value={resposta ? resposta : 0}
                    onChange={handleResposta}
                />
            </div>
        </div>
    );
};
