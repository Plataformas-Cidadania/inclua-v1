const Perguntas = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o'];
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, context.indicador.perguntas.map((pergunta, key) => {
    return /*#__PURE__*/React.createElement(Pergunta, {
      key: 'pergunta' + key,
      letra: letras[key],
      bgColor: props.bgColor,
      dimensao: context.dimensao,
      indicador: context.indicador.indicador,
      tipo: pergunta.tipo,
      titulo: pergunta.titulo
    });
  }));
};