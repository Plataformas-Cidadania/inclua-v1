const Options = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [showSubPerguntas, setShowSubPerguntas] = useState(false);
  useEffect(() => {
    setShowSubPerguntas(context.getResposta(props.id) === props.maximo);
  }, [props]);
  /*const handleResposta = (e) => {
      console.log('handleResposta', e.target.value, props.maximo, e.target.value === props.maximo);
      setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo));//trocar props.maximo pelo campo de valor de ativação
      context.setResposta(props.id, e.target.value);
  }*/

  const setResposta = value => {
    console.log('handleResposta', value, props.maximo, value === props.maximo);
    setShowSubPerguntas(parseInt(value) === parseInt(props.maximo)); //trocar props.maximo pelo campo de valor de ativação

    context.setResposta(props.id, value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "(", props.id, ")P", context.dimensao.numero, ".", context.indicador.numero, props.letra), " ", props.descricao), props.naoSeAplica ? /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: 'P' + context.dimensao.numero + context.indicador.numero + props.letra,
    id: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_0",
    onClick: () => setResposta(null),
    defaultChecked: context.getResposta(props.id) === null
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o se aplica")) : null, /*#__PURE__*/React.createElement("div", {
    className: "form-check float-start"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: 'P' + context.dimensao.numero + context.indicador.numero + props.letra,
    id: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_1",
    onClick: () => setResposta(props.maximo),
    defaultChecked: context.getResposta(props.id) === (props.inverter ? props.minimo : props.maximo)
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_1"
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    className: "form-check float-start"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: 'P' + context.dimensao.numero + context.indicador.numero + props.letra,
    id: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_2",
    onClick: () => setResposta(props.minimo),
    defaultChecked: context.getResposta(props.id) === (props.inverter ? props.maximo : props.minimo)
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_2"
  }, "N\xE3o")), JSON.stringify(context.dimensao.indicadores[0].perguntas[0]), JSON.stringify(context.dimensao.indicadores[1].perguntas[0]), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0"), showSubPerguntas ? /*#__PURE__*/React.createElement(Perguntas, {
    perguntas: props.perguntas,
    bgColor: props.bgColor,
    subperguntas: true
  }) : null);
};