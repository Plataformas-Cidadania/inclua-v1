const Nota = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [bgColor, setBgColor] = useState(null);
  const [notas, setNotas] = useState([]);
  const [resposta, setResposta] = useState(0);
  useEffect(() => {
    setResposta(context.getResposta());
  }, []);
  useEffect(() => {
    let newNotas = [];
    let start = props.minimo > 0 ? props.minimo : 1;

    for (let i = start; i <= props.maximo; i++) {
      newNotas.push(i);
    }

    setNotas(newNotas);
  }, [props.minimo, props.medio, props.maximo]);
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
  }, /*#__PURE__*/React.createElement("strong", null, "P", context.dimensao.info.dimensao, ".", context.indicador.indicador, props.letra), " ", props.titulo), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "range-merker",
    style: {
      width: '113%',
      marginLeft: '-80px'
    }
  }, notas.map(nota => {
    return /*#__PURE__*/React.createElement("div", {
      className: "range-merker-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "range-merker-box-item " + (resposta === nota ? bgColor : ''),
      onClick: () => clickResposta(nota),
      style: {
        cursor: 'pointer'
      }
    }, nota));
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range range",
    id: "customRange1",
    min: "1",
    max: "5",
    value: resposta,
    onChange: handleResposta
  })), props.minimo === props.medio ? /*#__PURE__*/React.createElement("div", {
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
  }, "N\xE3o se aplica")) : null);
};