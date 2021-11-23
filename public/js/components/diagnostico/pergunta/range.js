const Range = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [naoSeAplica, setNaoSeAplica] = useState(false);
  const [resposta, setResposta] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [name, setName] = useState(null);
  useEffect(() => {
    setName(context.dimensao.info.dimensao + '_' + context.indicador.indicador + '_' + props.letra);
  }, [context]);
  useEffect(() => {
    setBgColor(props.bgColor);
  }, [props.bgColor]);

  const handleResposta = e => {
    setResposta(e.target.value);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "P", context.dimensao.info.dimensao, ".", context.indicador.indicador, props.letra), " ", props.titulo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "range-merker"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item " + bgColor
  }, "1")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item " + bgColor
  }, "2")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item " + bgColor
  }, "3")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "4")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "5")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "6")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "7")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "8")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "9")), /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box"
  }, /*#__PURE__*/React.createElement("div", {
    className: "range-merker-box-item"
  }, "10"))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range range",
    id: "customRange1",
    min: "1",
    max: "10",
    defaultValue: "3"
  })));
};