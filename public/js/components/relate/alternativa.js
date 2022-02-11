const Alternativas = props => {
  const {
    useState,
    useEffect
  } = React;
  const [alternativas, setAlternativas] = useState([]);
  const [outros, setOutros] = useState(false);
  useEffect(() => {
    listAlternativas(props.id_pergunta);
  }, []);

  const listAlternativas = async id_pergunta => {
    try {
      const result = await axios.get('api/alternativa_relate/perguntaRelate/' + id_pergunta);
      setAlternativas(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickAlternativa = (value, idPergunta, clickOutros) => {
    if (!clickOutros) {
      setOutros(false);
      props.handleAlternativaRespostas(value, idPergunta);
      return;
    }

    props.handleAlternativaRespostas("", idPergunta);
    setOutros(true);
  };

  const handleTextAlternativa = (event, idPergunta) => {
    props.handleAlternativaRespostas(event.target.value, idPergunta);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, alternativas.map(item => {
    const id = "alternativa_" + item.id_pergunta + "_" + item.id_alternativa;
    return /*#__PURE__*/React.createElement("div", {
      key: "alternativa_" + item.id_alternativa
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "alternativa_" + item.id_pergunta,
      id: id,
      style: {
        width: "20px",
        height: "20px"
      },
      onClick: () => handleClickAlternativa(item.descricao, props.id_pergunta, item.outros)
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: id
    }, item.descricao));
  }), outros ? /*#__PURE__*/React.createElement("input", {
    type: "text",
    onChange: e => handleTextAlternativa(e, props.id_pergunta)
  }) : null);
};