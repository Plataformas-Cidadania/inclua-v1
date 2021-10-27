const Pergunta = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const tipos = {
    1: /*#__PURE__*/React.createElement(Options, null),
    2: /*#__PURE__*/React.createElement(Nota, null),
    3: /*#__PURE__*/React.createElement(Range, null)
  };
  return /*#__PURE__*/React.createElement("div", null, tipos[props.tipo]);
};