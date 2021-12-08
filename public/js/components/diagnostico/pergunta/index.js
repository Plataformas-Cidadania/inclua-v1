const Pergunta = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [tipo, setTipo] = useState(1);
  useEffect(() => {
    setTipo(props.tipo);
    console.log('tipo pergunta', props.tipo);
  }, [props]);

  const getTipo = (minimo, medio, maximo) => {
    console.log(props.letra, 'minimo', minimo, 'medio', medio, 'maximo', maximo);

    if (medio !== minimo && medio !== maximo) {
      if (maximo > 5) {
        return 3; //Range
      }

      return 2; //Nota
    }

    return 1; //Options (Sim/Não)
  };

  const tipos = {
    "1": /*#__PURE__*/React.createElement(Options, {
      id: props.id,
      descricao: props.descricao,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      maximo: props.maximo,
      legenda: props.titulo,
      inverter: props.inverter,
      naoSeAplica: props.naoSeAplica,
      perguntas: props.perguntas
    }),
    "2": /*#__PURE__*/React.createElement(Nota, {
      id: props.id,
      descricao: props.descricao,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      maximo: props.maximo,
      legenda: props.titulo,
      inverter: props.inverter,
      naoSeAplica: props.naoSeAplica,
      perguntas: props.perguntas
    }),
    "3": /*#__PURE__*/React.createElement(Range, {
      id: props.id,
      descricao: props.descricao,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      maximo: props.maximo,
      legenda: props.titulo,
      inverter: props.inverter,
      naoSeAplica: props.naoSeAplica,
      perguntas: props.perguntas
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-3"
  }, tipos[tipo]);
};