const Nota = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [name, setName] = useState(null);
  const [bgColor, setBgColor] = useState(null);
  const [notas, setNotas] = useState([]);
  const [valoresInvertidos, setValoresInvertidos] = useState([]);
  const [resposta, setResposta] = useState(0);
  const [showSubPerguntas, setShowSubPerguntas] = useState(false);
  useEffect(() => {
    //console.log('======================',props);
    setShowSubPerguntas(props.resposta === props.maximo);
    setResposta(props.resposta);
  }, [props.resposta]);
  useEffect(() => {
    let newNotas = []; //let start = props.minimo > 0 ? props.minimo : 1;

    for (let i = props.minimo; i <= props.maximo; i++) {
      newNotas.push(i);
    }

    setNotas(newNotas); //console.log(props);

    /*if(context.dimensao.numero === 4 && context.indicador.numero === 1 && props.letra === 'a') {
        console.log('INVERTER', props.inverter, props);
    }*/

    if (props.inverter) {
      //console.log('INVERTIDOS ..................');
      let newValoresInvertidos = [];

      for (let i = props.maximo; i >= props.minimo; i--) {
        newValoresInvertidos.push(i);
      }

      setValoresInvertidos(newValoresInvertidos);
    }
  }, [props]);
  useEffect(() => {
    setName(context.dimensao.dimensao + '_' + context.indicador.indicador + '_' + props.letra);
  }, [context]);
  useEffect(() => {
    setBgColor(props.bgColor);
  }, [props.bgColor]);

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
  }, /*#__PURE__*/React.createElement("strong", null, "P", context.dimensao.numero, ".", context.indicador.numero, props.letraPerguntaPai, props.letra), " ", props.descricao), /*#__PURE__*/React.createElement("p", null, props.legenda), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("div", {
    className: "range-merker",
    style: {
      width: '113%',
      marginLeft: '-80px'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    className: "radio"
  }, props.naoSeAplica ? /*#__PURE__*/React.createElement("li", {
    onClick: () => selectResposta(null)
  }, /*#__PURE__*/React.createElement("div", {
    className: resposta === null ? props.bgColor : ''
  }), /*#__PURE__*/React.createElement("p", null, "N\xE3o se aplica")) : null, notas.map((nota, key) => {
    let valor = props.inverter ? valoresInvertidos[key] : nota;
    /*if(context.dimensao.numero === 4 && context.indicador.numero === 1 && props.letra === 'a'){
        console.log(valoresInvertidos);
        console.log('valor invertido', valoresInvertidos[key], 'note', nota);
        console.log(context.dimensao.numero, context.indicador.numero, props.letra, 'resposta', resposta, 'valor', valor);
    }*/

    return /*#__PURE__*/React.createElement("li", {
      key: 'P' + context.dimensao.numero + context.indicador.numero + props.letra + "_" + key,
      onClick: () => selectResposta(valor)
    }, /*#__PURE__*/React.createElement("div", {
      className: resposta === valor ? props.bgColor : ''
    }), /*#__PURE__*/React.createElement("p", null, nota));
  })))), /*#__PURE__*/React.createElement("div", {
    className: "clear-both"
  }, "\xA0"), showSubPerguntas ? /*#__PURE__*/React.createElement(Perguntas, {
    perguntas: props.perguntas,
    bgColor: props.bgColor,
    letraPerguntaPai: props.letra
  }) : null);
};