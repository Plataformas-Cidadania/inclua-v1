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
  const [alertFixed, setAlertFixed] = useState(0);
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
        const dimensoes = setRespostasFromStorage(result.data.data);
        console.log(dimensoes);
        setDimensoes(dimensoes);
        setIdsDimensoes(dimensoes);
        setDimensao(dimensoes[0]); //pega a primeira dimensão

        return;
      }

      alert("Não foi possível carregar as dimensões");
    } catch (error) {
      alert("Não foi possível carregar as dimensões");
      console.log(error);
    }
  };
  /*const verificarResposta = (idPergunta, value) => {
      //console.log('---------------------------------------------------------');
      //console.log('Verificar Resposta', 'idPergunta', idPergunta);
      //return false;
      let pergunta = indicador.perguntas.filter(obj => obj.id_pergunta === idPergunta);
      //console.log('pergunta', pergunta[0]);
      if(pergunta.length > 0){
          //console.log('resposta: ', pergunta[0].resposta, 'alternativa: ', value, 'marcado: ', pergunta[0].resposta === value);
          //console.log('=====================================================');
           return pergunta[0].resposta === value;
      }
      //console.log('=====================================================');
      return false
  }*/


  const setIdsDimensoes = dimensoes => {
    let idsDimensoes = [];
    dimensoes.forEach(d => {
      idsDimensoes.push(d.id_dimensao);
    });
    localStorage.setItem('ids_dimensoes', JSON.stringify(idsDimensoes));
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

    localStorage.setItem('respostas_diagnostico_completo', JSON.stringify(newRespostas));
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
    let valid = true;
    console.log(respostas);
    dimensoes.forEach(d => {
      //if(d.id_dimensao === dimensao.id_dimensao){
      d.indicadores.forEach(i => {
        //if(i.id_indicador === indicador.id_indicador){
        i.perguntas.forEach(p => {
          console.log('validarRespostas', d.numero, i.numero, p.id_pergunta, p.letra, p.resposta);

          if (p.resposta === undefined && p.id_perguntaPai === 0) {
            console.log('inválido', p);
            valid = false;
          }

          p.perguntas.forEach(sp => {
            if (sp.resposta === undefined && p.resposta > 0) {
              valid = false;
            }
          });
        }); //}
      }); //}
    });
    return valid;
  };

  const enviarRespostas = async () => {
    if (!validarRespostas()) {
      //alert("Responda a todas as perguntas");
      setAlertFixed(1);
      return false;
    }

    let respostasApi = [];
    respostas.forEach(item => {
      let valor = item.resposta === null ? 0 : item.resposta;
      let respostaApi = {
        id_dimensao: item.id_dimensao,
        id_indicador: item.id_indicador,
        id_pergunta: item.id_pergunta,
        resposta: valor
      };
      respostasApi.push(respostaApi);
    });
    localStorage.setItem('respostas_diagnostico_completo', JSON.stringify(respostas));

    try {
      const jsonRespostas = JSON.stringify(respostasApi);
      const result = await axios.post('api/resposta/insereRespostas', jsonRespostas, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (result.data.success) {
        //const ids = JSON.parse(result.data.data)
        //localStorage.setItem('id_diagnostico_completo', ids[1]);
        localStorage.setItem('id_diagnostico_completo', result.data.data); //location.href = 'resultado';

        console.log('redirecionamento desativado');
        return;
      }

      alert("Não foi possível gravar as respostas");
      console.log(result.data.message);
    } catch (error) {
      alert("Não foi possível carregar as dimensões");
      console.log(error);
    }
  };

  const setRespostasFromStorage = dimensoes => {
    const respostas = JSON.parse(localStorage.getItem('respostas_diagnostico_completo'));

    if (!respostas) {
      return dimensoes;
    }

    setRespostas(respostas); //console.log(respostas);

    dimensoes.forEach(d => {
      d.indicadores.forEach(i => {
        i.perguntas.forEach(p => {
          const result = respostas.find(item => item.id_pergunta === p.id_pergunta); //console.log('result id_pergunta', p.id_pergunta, result);

          if (result) {
            p.resposta = result.resposta;
          }

          p.perguntas.forEach(sp => {
            const result = respostas.find(item => item.id_pergunta === sp.id_pergunta); //console.log('result id_pergunta', sp.id_pergunta, result);

            if (result) {
              sp.resposta = result.resposta;
            }
          });
        });
      });
    });
    return dimensoes;
  };

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "alert alert-success alert-fixed",
    role: "alert",
    style: {
      display: alertFixed ? '' : 'none'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => setAlertFixed(0)
  }, /*#__PURE__*/React.createElement("i", {
    className: "fas fa-times float-end cursor"
  })), /*#__PURE__*/React.createElement("i", {
    className: "fas fa-exclamation-triangle"
  }), "Responda a todas as perguntas"), /*#__PURE__*/React.createElement(DiagnosticoContext.Provider, {
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

      /*verificarResposta,*/
      setResposta,
      getResposta,
      validarRespostas,
      enviarRespostas
    }
  }, children));
};