const Range = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [bgColor, setBgColor] = useState(null);
  const [name, setName] = useState(null);
  const [range, setRange] = useState([]);
  const [resposta, setResposta] = useState(0);
  useEffect(() => {
    if (props.id) {
      setResposta(context.getResposta(props.id));
    }
  }, [props.id]);
  useEffect(() => {
    let newRange = [];
    let start = props.minimo > 0 ? props.minimo : 1;

    for (let i = start; i <= props.maximo; i++) {
      newRange.push(i);
    }

    setRange(newRange);
  }, [props.minimo, props.maximo]);
  useEffect(() => {
    setName(context.dimensao.dimensao + '_' + context.indicador.indicador + '_' + props.letra);
  }, [context]);
  useEffect(() => {
    setBgColor(props.bgColor);
  }, [props.bgColor]);

  const handleResposta = e => {
    context.setResposta(props.id, e.target.value);
    setResposta(e.target.value);
  };

  const clickResposta = nota => {
    context.setResposta(props.id, nota);
    setResposta(nota);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "box-items bg-lgt"
  }, /*#__PURE__*/React.createElement("p", {
    className: "mb-3"
  }, /*#__PURE__*/React.createElement("strong", null, "(", props.id, ")P", context.dimensao.dimensao, ".", context.indicador.indicador, props.letra), " ", props.descricao), props.naoSeAplica ? /*#__PURE__*/React.createElement("div", {
    className: "form-check  float-end"
  }, /*#__PURE__*/React.createElement("input", {
    className: "form-check-input",
    type: "radio",
    name: name,
    id: name + "_2",
    value: props.minimo,
    onClick: handleResposta,
    defaultChecked: context.verificarResposta(props.id, "0")
  }), /*#__PURE__*/React.createElement("label", {
    className: "form-check-label",
    htmlFor: "flexRadioDefault2"
  }, "N\xE3o se aplica")) : null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "range-merker"
  }, range.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'nota_' + props.letra + key,
      className: "range-merker-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "range-merker-box-item " + (resposta === item ? bgColor : ''),
      onClick: () => clickResposta(item),
      style: {
        cursor: 'pointer'
      }
    }, item));
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range range",
    id: "customRange1",
    min: props.minimo,
    max: props.maximo,
    value: resposta ? resposta : 0,
    onChange: handleResposta
  })));
};