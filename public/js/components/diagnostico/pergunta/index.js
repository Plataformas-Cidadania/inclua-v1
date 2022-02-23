const Pergunta = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [tipo, setTipo] = useState(1);
  const tipos = {
    "1": /*#__PURE__*/React.createElement(Options, {
      id: props.id,
      descricao: props.descricao,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      maximo: props.maximo,
      legenda: props.legenda,
      inverter: props.inverter,
      naoSeAplica: props.naoSeAplica,
      resposta: props.resposta,
      perguntas: props.perguntas,
      letraPerguntaPai: props.letraPerguntaPai
    }),
    "2": /*#__PURE__*/React.createElement(Nota, {
      id: props.id,
      descricao: props.descricao,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      maximo: props.maximo,
      legenda: props.legenda,
      inverter: props.inverter,
      naoSeAplica: props.naoSeAplica,
      resposta: props.resposta,
      perguntas: props.perguntas,
      letraPerguntaPai: props.letraPerguntaPai
    }),
    "3": /*#__PURE__*/React.createElement(Range, {
      id: props.id,
      descricao: props.descricao,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      maximo: props.maximo,
      legenda: props.legenda,
      inverter: props.inverter,
      naoSeAplica: props.naoSeAplica,
      resposta: props.resposta,
      perguntas: props.perguntas
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-3"
  }, tipos[props.tipo]);
};