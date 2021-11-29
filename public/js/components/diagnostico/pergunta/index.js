const Pergunta = props => {
  const context = React.useContext(DiagnosticoContext);
  const {
    useState,
    useEffect
  } = React;
  const [tipo, setTipo] = useState(1);
  useEffect(() => {
    setTipo(getTipo(props.minimo, props.medio, props.maximo));
  }, [props]);

  const getTipo = (minimo, medio, maximo) => {
    if (medio !== minimo && medio !== maximo) {
      if (maximo > 5) {
        return 3; //Range
      }

      return 2; //Nota
    }

    return 1; //Options (Sim/Não)
  };

  const tipos = {
    1: /*#__PURE__*/React.createElement(Options, {
      id: props.id,
      titulo: props.titulo,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      medio: props.medio,
      maximo: props.maximo
    }),
    2: /*#__PURE__*/React.createElement(Nota, {
      id: props.id,
      titulo: props.titulo,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      medio: props.medio,
      maximo: props.maximo
    }),
    3: /*#__PURE__*/React.createElement(Range, {
      id: props.id,
      titulo: props.titulo,
      bgColor: props.bgColor,
      letra: props.letra,
      minimo: props.minimo,
      medio: props.medio,
      maximo: props.maximo
    })
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "col-md-12 mt-3"
  }, tipos[tipo]);
};