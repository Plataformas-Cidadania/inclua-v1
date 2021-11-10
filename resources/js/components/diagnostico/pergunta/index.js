const Pergunta = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const tipos = {
        1: <Options titulo={props.titulo} bgColor={props.bgColor} letra={props.letra}/>,
        2: <Nota titulo={props.titulo}  bgColor={props.bgColor} letra={props.letra}/>,
        3: <Range titulo={props.titulo}  bgColor={props.bgColor} letra={props.letra}/>,
    };

    return (
        <div className="col-md-12 mt-3">
            {tipos[props.tipo]}
        </div>
    );
};
