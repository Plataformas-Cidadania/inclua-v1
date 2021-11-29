const Perguntas = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, context.indicador.perguntas.map((pergunta, key) => {
    return /*#__PURE__*/React.createElement(Pergunta, {
      key: 'pergunta' + key,
      letra: pergunta.letra,
      bgColor: props.bgColor,
      dimensao: context.dimensao,
      indicador: context.indicador.numero,
      id: pergunta.id,
      minimo: pergunta.minimo,
      medio: pergunta.medio,
      maximo: pergunta.maximo,
      titulo: pergunta.titulo
    });
  }));
};