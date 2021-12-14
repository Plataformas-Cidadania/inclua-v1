const Diagnostico = () => {
  const {
    useContext
  } = React;
  const context = useContext(DiagnosticoContext);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), context.tipo ? /*#__PURE__*/React.createElement(Dimensoes, null) : /*#__PURE__*/React.createElement("br", null) //null
  , context.tipo ? /*#__PURE__*/React.createElement("div", {
    className: "text-center"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn btn-lg btn-primary",
    onClick: () => context.enviarRespostas()
  }, "Enviar Respostas")) : null, /*#__PURE__*/React.createElement("br", null));
};

ReactDOM.render( /*#__PURE__*/React.createElement(DiagnosticoProvider, null, /*#__PURE__*/React.createElement(Diagnostico, null)), document.getElementById('diagnostico'));