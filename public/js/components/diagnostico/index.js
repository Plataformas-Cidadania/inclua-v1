var Diagnostico = function Diagnostico() {
    var _React = React,
        useContext = _React.useContext;

    var context = useContext(DiagnosticoContext);

    return React.createElement(
        'div',
        null,
        React.createElement(Header, null),
        context.tipo ? React.createElement(Dimensoes, null) : React.createElement('br', null) //null

    );
};

ReactDOM.render(React.createElement(
    DiagnosticoProvider,
    null,
    React.createElement(Diagnostico, null)
), document.getElementById('diagnostico'));