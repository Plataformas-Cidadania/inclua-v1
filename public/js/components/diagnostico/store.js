const DiagnosticoContext = React.createContext({});

const DiagnosticoProvider = ({
  children
}) => {
  const {
    useState,
    useEffect
  } = React;
  const [tipo, setTipo] = useState(null);
  const [dimensoes, setDimensoes] = useState([]);
  const [dimensao, setDimensao] = useState(1);
  const [dimensoesRespondidas, setDimensoesRespondidas] = useState([]);
  useEffect(() => {
    listDimensoes();
  }, []);

  const listDimensoes = async () => {
    try {
      const result = await axios.get('teste-dimensoes');
      setDimensoes(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  return /*#__PURE__*/React.createElement(DiagnosticoContext.Provider, {
    value: {
      tipo,
      setTipo,
      dimensao,
      setDimensao,
      dimensoes,
      dimensoesRespondidas,
      setDimensoesRespondidas
    }
  }, children);
};