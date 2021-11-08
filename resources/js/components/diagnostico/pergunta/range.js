const Range = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [naoSeAplica, setNaoSeAplica] = useState(false);
    const [resposta, setResposta] = useState(null);
    const [bgColor, setBgColor] = useState(null);

    useEffect(() => {
        setBgColor(props.bgColor);
    }, [props.bgColor]);

    const handleResposta = (e) => {
        setResposta(e.target.value);
    }

    return (
        <div className="box-items bg-lgt">
            <p className="mb-3"><strong>P{context.dimensao.info.dimensao}.{context.indicador.indicador}{props.letra}</strong> {props.titulo}</p>
            <div>
                <br/>
                <div className="range-merker">
                    <div className="range-merker-box">
                        <div className={"range-merker-box-item " + bgColor}>1</div>
                    </div>
                    <div className="range-merker-box">
                        <div className={"range-merker-box-item " + bgColor}>2</div>
                    </div>
                    <div className="range-merker-box">
                        <div className={"range-merker-box-item " + bgColor}>3</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">4</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">5</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">6</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">7</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">8</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">9</div>
                    </div>
                    <div className="range-merker-box">
                        <div className="range-merker-box-item">10</div>
                    </div>
                </div>
                {/*<label for="customRange1" className="form-label">Bom</label>*/}
                <br/>
                <input type="range" className="form-range range" id="customRange1" min="1" max="10" value="3"/>
            </div>
        </div>
    );
};
