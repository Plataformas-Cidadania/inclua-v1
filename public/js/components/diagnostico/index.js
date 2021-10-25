const Diagnostico = () => {
  const {
    useContext
  } = React;
  const context = useContext(DiagnosticoContext);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null), context.tipo ? /*#__PURE__*/React.createElement(Dimensoes, null) : /*#__PURE__*/React.createElement("br", null) //null
  );
};

ReactDOM.render( /*#__PURE__*/React.createElement(DiagnosticoProvider, null, /*#__PURE__*/React.createElement(Diagnostico, null)), document.getElementById('diagnostico'));