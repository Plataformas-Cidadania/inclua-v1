const Options = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [showSubPerguntas, setShowSubPerguntas] = useState(false);

  const handleResposta = e => {
    console.log(e.target.value, props.maximo, e.target.value === props.maximo);
    setShowSubPerguntas(parseInt(e.target.value) === parseInt(props.maximo)); //trocar props.maximo pelo campo de valor de ativação

    context.setResposta(props.id, e.target.value);
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
    value: 0,
    onChange: handleResposta,
    defaultChecked: context.verificarResposta(props.id, 0)
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
    value: props.inverter ? props.minimo : props.maximo,
    onChange: handleResposta,
    defaultChecked: context.verificarResposta(props.id, props.inverter ? props.minimo : props.maximo)
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault1"
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: 'P' + context.dimensao.numero + context.indicador.numero + props.letra,
    id: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_2",
    value: props.inverter ? props.maximo : props.minimo,
    onChange: handleResposta,
    defaultChecked: context.verificarResposta(props.id, props.inverter ? props.maximo : props.minimo)
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o")), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0"), showSubPerguntas ? /*#__PURE__*/React.createElement(Perguntas, {
    perguntas: props.perguntas,
    bgColor: props.bgColor
  }) : null);
};