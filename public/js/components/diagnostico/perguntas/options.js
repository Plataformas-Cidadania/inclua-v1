const Options = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [naoSeAplica, setNaoSeAplica] = useState(false);
  const [resposta, setResposta] = useState(null);

  const handleReposta = e => {
    setResposta(e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "P", props.dimensao, ".", props.indicador, props.pergunta), " ", props.titulo), /*#__PURE__*/React.createElement("div", {
    className: "form-check float-start"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "flexRadioDefault",
    id: "flexRadioDefault1",
    value: "1",
    onChange: handleReposta
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault1"
  }, "Sim")), /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: "flexRadioDefault",
    id: "flexRadioDefault2",
    value: "2",
    checked: true,
    onChange: handleResposta
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o")), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0"));
};