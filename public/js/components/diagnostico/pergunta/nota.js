const Nota = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [bgColor, setBgColor] = useState(null);
  const notas = ['1', '2', '3', '4', '5'];
  const [resposta, setResposta] = useState(0);
  useEffect(() => {
    setResposta(context.getResposta());
  }, []);
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
  })));
};