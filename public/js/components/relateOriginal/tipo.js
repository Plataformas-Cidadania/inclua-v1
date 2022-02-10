const Tipo = () => {
  const {
    useState,
    useEffect
  } = React;
  const [tipoPergunta, setTipoPergunta] = useState([]);
  useEffect(() => {
    Tipos();
  }, []);

  const Tipos = async () => {
    try {
      const result = await axios.get('api/tipo_pergunta_relate/1');
      setTipoPergunta(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(tipoPergunta);
  return /*#__PURE__*/React.createElement("div", null);
};