const Nota = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [bgColor, setBgColor] = useState(null);
    const [name, setName] = useState(null);

    useEffect(() => {
        setName(context.dimensao.info.dimensao+'_'+context.indicador.indicador+'_'+props.letra);
    }, [context]);

    useEffect(() => {
        setBgColor(props.bgColor);
    }, [props.bgColor]);

    const handleResposta = (e) => {
        context.setResposta(props.id, e.target.value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>P{context.dimensao.info.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.titulo}</p>
            <div>
                <br/>
                <div className="range-merker" style={{width: '113%', marginLeft: '-80px'}}>
                    <div className="range-merker-box">
                        <div className={"range-merker-box-item "}>1</div>
                    </div>
                    <div className="range-merker-box">
                        <div className={"range-merker-box-item " + bgColor}>2</div>
                    </div>
                    <div className="range-merker-box">
                        <div className={"range-merker-box-item "}>3</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">4</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">5</div>
                    </div>
                </div>
                {/*<label for="customRange1" className="form-label">Bom</label>*/}
                <br/>
                <input type="range" className="form-range range" id="customRange1" min="1" max="5" defaultValue="2"/>
            </div>
        </div>
    );
};
