const Range = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [naoSeAplica, setNaoSeAplica] = useState(false);
  const [bgColor, setBgColor] = useState(null);
  const [name, setName] = useState(null);
  const [range, setRange] = useState([]);
  const [resposta, setResposta] = useState(0);
  useEffect(() => {
    if (props.id) {
      setResposta(context.getResposta());
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
  }, /*#__PURE__*/React.createElement("strong", null, "P", context.dimensao.dimensao, ".", context.indicador.indicador, props.letra), " ", props.descricao), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "range-merker"
  }, range.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'nota_' + props.letra + key,
      className: "range-merker-box"
    }, /*#__PURE__*/React.createElement("div", {
      className: "range-merker-box-item " + (resposta => item ? bgColor : ''),
      onClick: () => clickResposta(item),
      style: {
        cursor: 'pointer'
      }
    }, item));
  })), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "form-range range",
    id: "customRange1",
    min: "1",
    max: "10",
    defaultValue: "3"
  })));
};