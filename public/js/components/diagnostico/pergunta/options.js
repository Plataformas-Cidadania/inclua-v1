const Options = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [name, setName] = useState(null);
  useEffect(() => {
    setName(context.dimensao.info.dimensao + '_' + context.indicador.indicador + '_' + props.letra);
  }, [context]);

  const handleResposta = e => {
    context.setResposta(props.id, e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "P", context.dimensao.info.dimensao, ".", context.indicador.indicador, props.letra), " ", props.titulo), props.naoSeAplica === 1 ? /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: name,
    id: name + "_2",
    value: props.minimo,
    onClick: handleResposta,
    defaultChecked: context.verificarResposta(props.id, props.minimo)
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o se aplica")) : null, /*#__PURE__*/React.createElement("div", {
    className: "form-check float-start"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: name,
    id: name + "_1",
    value: props.maximo,
    onClick: handleResposta,
    defaultChecked: context.verificarResposta(props.id, "1")
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault1"
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: name,
    id: name + "_2",
    value: props.minimo,
    onClick: handleResposta,
    defaultChecked: context.verificarResposta(props.id, "2")
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o")), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0"));
};