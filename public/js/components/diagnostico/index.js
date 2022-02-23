const Diagnostico = () => {
  const {
    useContext,
    useEffect
  } = React;
  const context = useContext(DiagnosticoContext);
  useEffect(() => {
    if (tipo && context.indicador) {
      console.log('setTipo', tipo); //console.log('dimensoes', context.dimensoes);

      context.setTipo(tipo);
    }
  }, [context.indicador]);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), context.tipo ? /*#__PURE__*/React.createElement(Dimensoes, null) : /*#__PURE__*/React.createElement("br", null) //null
  , context.tipo ? /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-lg btn-primary",
    onClick: () => context.enviarRespostas()
  }, "Enviar Respostas para ", parseInt(context.tipo) === 1 ? "Diagnóstico Completo" : "Diagnóstico Parcial")) : null, /*#__PURE__*/React.createElement("br", null));
};

ReactDOM.render( /*#__PURE__*/React.createElement(DiagnosticoProvider, null, /*#__PURE__*/React.createElement(Diagnostico, {
  tipo: tipo
})), document.getElementById('diagnostico'));