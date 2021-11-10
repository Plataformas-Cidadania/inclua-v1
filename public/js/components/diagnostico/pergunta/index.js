const Pergunta = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const tipos = {
    1: /*#__PURE__*/React.createElement(Options, {
      titulo: props.titulo,
      bgColor: props.bgColor,
      letra: props.letra
    }),
    2: /*#__PURE__*/React.createElement(Nota, {
      titulo: props.titulo,
      bgColor: props.bgColor,
      letra: props.letra
    }),
    3: /*#__PURE__*/React.createElement(Range, {
      titulo: props.titulo,
      bgColor: props.bgColor,
      letra: props.letra
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-3"
  }, tipos[props.tipo]);
};