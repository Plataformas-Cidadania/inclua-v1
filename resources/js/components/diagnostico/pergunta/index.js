const Pergunta = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [tipo, setTipo] = useState(1);

    useEffect(() => {
        setTipo(props.tipo);
    }, [props]);

    const getTipo = (minimo, medio, maximo) => {
        console.log(props.letra, 'minimo', minimo, 'medio', medio, 'maximo', maximo);
        if(medio !== minimo && medio !== maximo){
            if(maximo > 5){
                return 3;//Range
            }
            return 2;//Nota
        }
        return 1;//Options (Sim/Não)
    }

    const tipos = {
        1: <Options
            id={props.id}
            titulo={props.titulo}
            bgColor={props.bgColor}
            letra={props.letra}
            minimo={props.minimo}
            maximo={props.maximo}
            legenda={pergunta.titulo}
            inverter={pergunta.inverter}
            naoSeAplica={pergunta.nao_se_aplica}
        />,
        2: <Nota
            id={props.id}
            titulo={props.titulo}
            bgColor={props.bgColor}
            letra={props.letra}
            minimo={props.minimo}
            maximo={props.maximo}
            legenda={pergunta.titulo}
            inverter={pergunta.inverter}
            naoSeAplica={pergunta.nao_se_aplica}
        />,
        3: <Range
            id={props.id}
            titulo={props.titulo}
            bgColor={props.bgColor}
            letra={props.letra}
            minimo={props.minimo}
            maximo={props.maximo}
            legenda={pergunta.titulo}
            inverter={pergunta.inverter}
            naoSeAplica={pergunta.nao_se_aplica}
        />,
    };

    return (
        <div className="col-md-12 mt-3">
            {tipos[tipo]}
        </div>
    );
};
