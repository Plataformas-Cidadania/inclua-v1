const Pergunta = props => {
  const {
    useState,
    useEffect
  } = React;
  const [perguntas, setPerguntas] = useState([]);
  const [relate, setRelate] = useState(0);
  useEffect(() => {
    ListPerguntas();
  }, []);

  const ClickRelate = (id, key) => {
    setRelate(id, key);
  };

  const ListPerguntas = async () => {
    try {
      //const result = await axios.get('api/pergunta_relate/'+props.id_tipo);
      const result = await axios.get('api/pergunta_relate');
      setPerguntas(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement("div", null, perguntas.map((item, key) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'pergunta' + item.id_pergunta
    }, /*#__PURE__*/React.createElement("p", null, key + 1, " - ", item.descricao), /*#__PURE__*/React.createElement(Insert, {
      id_pergunta: item.id_pergunta,
      id_user: id_user,
      style: {
        display: props.id_tipo === 4 ? '' : 'none'
      }
    }), /*#__PURE__*/React.createElement("br", null));
  }));
};