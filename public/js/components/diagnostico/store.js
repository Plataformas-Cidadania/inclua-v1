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
  const [dimensao, setDimensao] = useState({
    info: {},
    indicadores: []
  });
  const [indicador, setIndicador] = useState(1);
  const [dimensoesRespondidas, setDimensoesRespondidas] = useState([]);
  /*state = {
      tipo: null,
      dimensoes: [],
  }
   setState({tipo: 1}, function(){
      console.log(this.state.tipo);
  })*/

  useEffect(() => {
    listDimensoes();
  }, []);
  useEffect(() => {
    setIndicador(dimensao.indicadores[0]);
  }, [dimensao]);

  const listDimensoes = async () => {
    try {
      //const result = await axios.get('teste-dimensoes');
      const result = await axios.get('json/diagnostico.json');
      setDimensoes(result.data);
      setDimensao(result.data[0]); //pega a primeira dimensão
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
      setDimensoesRespondidas,
      indicador,
      setIndicador
    }
  }, children);
};