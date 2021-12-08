const Perguntas = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  return /*#__PURE__*/React.createElement("div", {
    className: "row"
  }, context.indicador.perguntas.map((pergunta, key) => {
    return /*#__PURE__*/React.createElement(Page, {
      key: 'pergunta' + key,
      letra: pergunta.letra,
      bgColor: props.bgColor,
      dimensao: context.dimensao,
      indicador: context.indicador.numero,
      id: pergunta.id_pergunta,
      minimo: pergunta.vl_minimo,
      maximo: pergunta.vl_maximo,
      tipo: pergunta.tipo,
      descricao: pergunta.descricao,
      legenda: pergunta.legenda,
      inverter: pergunta.inverter,
      naoSeAplica: pergunta.nao_se_aplica,
      idPerguntaPai: pergunta.id_perguntaPai,
      perguntas: pergunta.perguntas
    });
  }));
};
