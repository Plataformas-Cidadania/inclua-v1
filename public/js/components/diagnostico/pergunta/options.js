const Options = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [showSubPerguntas, setShowSubPerguntas] = useState(false);
  const [resposta, setResposta] = useState(props.resposta);
  useEffect(() => {
    console.log('======================', props);
    setShowSubPerguntas(props.resposta === props.maximo);
    setResposta(props.resposta);
  }, [props.resposta]);
  /*const handleResposta = (e) => {
      console.log('handleResposta', e.target.value, props.maximo, e.target.value === props.maximo);
      setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
      context.setResposta(props.id, e.target.value);
  }*/

  const selectResposta = value => {
    //console.log('handleResposta', value, props.maximo, value === props.maximo);
    setShowSubPerguntas(parseInt(value) === parseInt(props.maximo)); //trocar props.maximo pelo campo de valor de ativação

    context.setResposta(props.id, value);
    setResposta(value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "(", props.id, ")P", context.dimensao.numero, ".", context.indicador.numero, props.letra), " ", props.descricao), /*#__PURE__*/React.createElement("ul", {
    className: "radio"
  }, props.naoSeAplica ? /*#__PURE__*/React.createElement("li", {
    onClick: () => selectResposta(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: resposta === null ? props.bgColor : ''
  }), /*#__PURE__*/React.createElement("p", null, "N\xE3o se aplica")) : null, /*#__PURE__*/React.createElement("li", {
    onClick: () => selectResposta(props.inverter ? props.minimo : props.maximo)
  }, /*#__PURE__*/React.createElement("div", {
    className: resposta === (props.inverter ? props.minimo : props.maximo) ? props.bgColor : ''
  }), /*#__PURE__*/React.createElement("p", null, "Sim")), /*#__PURE__*/React.createElement("li", {
    onClick: () => selectResposta(props.inverter ? props.maximo : props.minimo)
  }, /*#__PURE__*/React.createElement("div", {
    className: resposta === (props.inverter ? props.maximo : props.minimo) ? props.bgColor : ''
  }), /*#__PURE__*/React.createElement("p", null, "N\xE3o"))), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0"), showSubPerguntas ? /*#__PURE__*/React.createElement(Perguntas, {
    perguntas: props.perguntas,
    bgColor: props.bgColor,
    subperguntas: true
  }) : null);
};