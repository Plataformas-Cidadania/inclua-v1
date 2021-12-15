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
    indicadores: []
  });
  const [indicador, setIndicador] = useState(1);
  const [dimensoesRespondidas, setDimensoesRespondidas] = useState([]);
  const [respostas, setRespostas] = useState([]);
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
  useEffect(() => {//console.log(indicador);
  }, [indicador]);

  const listDimensoes = async () => {
    try {
      //const result = await axios.get('json/diagnostico.json');
      const result = await axios.get('api/dimensao');

      if (result.data.success) {
        const dimensoes = result.data.data; //console.log(JSON.stringify(dimensoes));

        setDimensoes(dimensoes);
        setDimensao(dimensoes[0]); //pega a primeira dimensão

        return;
      }

      alert("Não foi possível carregar as dimensões");
    } catch (error) {
      alert("Não foi possível carregar as dimensões");
      console.log(error);
    }
  };

  const verificarResposta = (idPergunta, value) => {
    //console.log('---------------------------------------------------------');
    //console.log('Verificar Resposta', 'idPergunta', idPergunta);
    //return false;
    let pergunta = indicador.perguntas.filter(obj => obj.id_pergunta === idPergunta); //console.log('pergunta', pergunta[0]);

    if (pergunta.length > 0) {
      //console.log('resposta: ', pergunta[0].resposta, 'alternativa: ', value, 'marcado: ', pergunta[0].resposta === value);
      //console.log('=====================================================');
      return pergunta[0].resposta === value;
    } //console.log('=====================================================');


    return false;
  };

  const setResposta = (idPergunta, value) => {
    //console.log('setResposta', 'id_dimensao: '+dimensao.id_dimensao, 'id_indicador: '+indicador.id_indicador, 'id_pergunta: '+idPergunta, 'resposta: '+value);
    let newDimensoes = dimensoes;
    newDimensoes.forEach(d => {
      if (d.id_dimensao === dimensao.id_dimensao) {
        d.indicadores.forEach(i => {
          if (i.id_indicador === indicador.id_indicador) {
            i.perguntas.forEach(p => {
              if (p.id_pergunta === idPergunta) {
                p.resposta = value;
              }

              p.perguntas.forEach(sp => {
                if (sp.id_pergunta === idPergunta) {
                  sp.resposta = value;
                }
              });
            });
          }
        });
      }
    });
    setDimensoes(newDimensoes);
    console.log(newDimensoes);
    let newRespostas = respostas;
    let existeResposta = false;

    for (let i = 0; i < newRespostas.length; i++) {
      if (newRespostas[i].id_pergunta === idPergunta) {
        newRespostas[i].resposta = value;
        existeResposta = true;
        break;
      }
    }

    ;

    if (!existeResposta) {
      newRespostas.push({
        id_dimensao: dimensao.id_dimensao,
        id_indicador: indicador.id_indicador,
        id_pergunta: idPergunta,
        resposta: value
      });
    }

    setRespostas(newRespostas); //console.log(newRespostas);

    console.log(JSON.stringify(newRespostas));
  };

  const getResposta = idPergunta => {
    //console.log('getResposta');
    //console.log(idPergunta);
    let resposta = null;
    dimensoes.forEach(d => {
      if (d.id_dimensao === dimensao.id_dimensao) {
        d.indicadores.forEach(i => {
          if (i.id_indicador === indicador.id_indicador) {
            i.perguntas.forEach(p => {
              if (p.id_pergunta === idPergunta) {
                resposta = p.resposta;
              }
            });
          }
        });
      }
    }); //console.log('getResposta', 'idPergunta:', idPergunta, 'resposta', resposta);

    return resposta;
  };

  const validarRespostas = () => {
    return true;
  };

  const enviarRespostas = () => {
    if (!validarRespostas()) {
      return false;
    }

    console.log(respostas);
    localStorage.setItem('respostas_diagnostico_completo', JSON.stringify(respostas));
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
      setIndicador,
      verificarResposta,
      setResposta,
      getResposta,
      validarRespostas,
      enviarRespostas
    }
  }, children);
};