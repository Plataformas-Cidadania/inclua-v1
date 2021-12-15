const Pergunta = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;
    const [tipo, setTipo] = useState(1);

    const tipos = {
        "1": <Options
            id={props.id}
            descricao={props.descricao}
            bgColor={props.bgColor}
            letra={props.letra}
            minimo={props.minimo}
            maximo={props.maximo}
            legenda={props.titulo}
            inverter={props.inverter}
            naoSeAplica={props.naoSeAplica}
            resposta={props.resposta}
            perguntas={props.perguntas}
        />,
        "2": <Nota
            id={props.id}
            descricao={props.descricao}
            bgColor={props.bgColor}
            letra={props.letra}
            minimo={props.minimo}
            maximo={props.maximo}
            legenda={props.titulo}
            inverter={props.inverter}
            naoSeAplica={props.naoSeAplica}
            resposta={props.resposta}
            perguntas={props.perguntas}
        />,
        "3": <Range
            id={props.id}
            descricao={props.descricao}
            bgColor={props.bgColor}
            letra={props.letra}
            minimo={props.minimo}
            maximo={props.maximo}
            legenda={props.titulo}
            inverter={props.inverter}
            naoSeAplica={props.naoSeAplica}
            resposta={props.resposta}
            perguntas={props.perguntas}
        />,
    };

    return (
        <div className="col-md-12 mt-3">
            {tipos[props.tipo]}
        </div>
    );
};
