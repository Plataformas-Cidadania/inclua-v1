const Pergunta = (props) => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const tipos = {
        1: <Options />,
        2: <Nota />,
        3: <Range />,
    };

    return (
        <div>
            {tipos[props.tipo]}
        </div>
    );
};
