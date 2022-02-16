
const DiagnosticoContext = React.createContext({});

const DiagnosticoProvider = ({children}) => {

    const {useState, useEffect} = React;

    const [tipo, setTipo] = useState(2);
    const [dimensoes, setDimensoes] = useState([]);
    const [dimensao, setDimensao] = useState({indicadores:[]});
    //const [indicador, setIndicador] = useState(1);
    const [indicador, setIndicador] = useState(null);
    const [dimensoesRespondidas, setDimensoesRespondidas] = useState([]);
    const [respostas, setRespostas] = useState([]);
    const [alertFixed, setAlertFixed] = useState(0);
    const [diagnostico, setDiagnostico] = useState({ofertaPublica: null, grupoFocal: null})
    const [categorias, setCategorias] = useState([]);
    const [categoriasMarcadas, setCategoriasMarcadas] = useState([]);

    /*state = {
        tipo: null,
        dimensoes: [],
    }

    setState({tipo: 1}, function(){
        console.log(this.state.tipo);
    })*/

    useEffect(() => {
        listDimensoes();
        listCategorias();
    }, []);

    useEffect(() => {
        setIndicador(dimensao.indicadores[0]);
    }, [dimensao]);

    useEffect(() => {
        //console.log(indicador);
    }, [indicador]);

    useEffect(() => {
        console.log(respostas);
    }, [respostas]);

    const listDimensoes = async () => {
        try {
            //const result = await axios.get('json/diagnostico.json');
            const result = await axios.get('api/dimensao');
            if(result.data.success){
                const dimensoes = setRespostasFromStorage(result.data.data);
                console.log(dimensoes);
                setDimensoes(dimensoes)
                setIdsDimensoes(dimensoes)
                setDimensao(dimensoes[0]);//pega a primeira dimensão
                return;
            }
            console.log("Não foi possível carregar as dimensões.");
        } catch (error) {
            //alert("Não foi possível carregar as dimensões!");
            console.log("Não foi possível carregar as dimensões!");
            console.log(error);
        }
    }

    const listCategorias = async () => {
        try {
            //const result = await axios.get('json/diagnostico.json');
            const result = await axios.get('api/categoria');
            if(result.data.success){
                let newCategorias = result.data.data;
                newCategorias.forEach((item) => {
                    item.marcada = 0;
                })
                setCategorias(newCategorias);

                return;
            }
            console.log("Não foi possível carregar as categorias.");
        } catch (error) {
            //alert("Não foi possível carregar as dimensões!");
            console.log("Não foi possível carregar as dimensões!");
            console.log(error);
        }
    }


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

    const setIdsDimensoes = (dimensoes) => {
        let idsDimensoes = [];
        dimensoes.forEach((d) => {
            idsDimensoes.push(d.id_dimensao);
        });
        localStorage.setItem('ids_dimensoes', JSON.stringify(idsDimensoes));
    }

    const setResposta = (idPergunta, value) => {
        //console.log('setResposta', 'id_dimensao: '+dimensao.id_dimensao, 'id_indicador: '+indicador.id_indicador, 'id_pergunta: '+idPergunta, 'resposta: '+value);
        let newDimensoes = dimensoes;
        newDimensoes.forEach((d) => {
            if(d.id_dimensao === dimensao.id_dimensao){
                d.indicadores.forEach((i) => {
                    if(i.id_indicador === indicador.id_indicador){
                        i.perguntas.forEach((p) => {
                            if(p.id_pergunta === idPergunta){
                                p.resposta = value;
                            }
                            p.perguntas.forEach((sp) => {
                                if(sp.id_pergunta === idPergunta){
                                    sp.resposta = value;
                                }
                            });
                        });
                    }
                })
            }
        });
        setDimensoes(newDimensoes);
        console.log(newDimensoes);

        let newRespostas = respostas;
        let existeResposta = false;
        for(let i = 0; i < newRespostas.length; i++){
            if(newRespostas[i].id_pergunta === idPergunta){
                newRespostas[i].resposta = value;
                existeResposta = true;
                break;
            }
        };
        if(!existeResposta){
            newRespostas.push({id_dimensao: dimensao.id_dimensao, id_indicador: indicador.id_indicador, id_pergunta: idPergunta, resposta: value});
        }
        setRespostas(newRespostas);

        //console.log(newRespostas);
        localStorage.setItem('respostas_diagnostico_completo', JSON.stringify(newRespostas));
        console.log(JSON.stringify(newRespostas));
    }

    const getResposta = (idPergunta) => {
        //console.log('getResposta');
        //console.log(idPergunta);
        let resposta = null;
        dimensoes.forEach((d) => {
            if(d.id_dimensao === dimensao.id_dimensao){
                d.indicadores.forEach((i) => {
                    if(i.id_indicador === indicador.id_indicador){
                        i.perguntas.forEach((p) => {
                            if(p.id_pergunta === idPergunta){
                                resposta = p.resposta;
                            }
                        });
                    }
                })
            }
        });
        //console.log('getResposta', 'idPergunta:', idPergunta, 'resposta', resposta);
        return resposta;
    }

    const validarRespostas = () => {
        let valid = true;
        console.log(respostas);

        if(respostas.length === 0){
            console.log('Válido:', false);
            return false;
        }

        //DIAGNÓSTICO COMPLETO
        if(tipo === 1){
            console.log('Validar Diagnóstico Completo');
            dimensoes.forEach((d) => {
                //if(d.id_dimensao === dimensao.id_dimensao){
                d.indicadores.forEach((i) => {
                    //if(i.id_indicador === indicador.id_indicador){
                    i.perguntas.forEach((p) => {
                        console.log("numero_dimensao", "numero_indicador", "id_pergunta", "letra", "id_perguntaPai", "resposta");
                        console.log(d.numero, i.numero, p.id_pergunta, p.letra, p.id_perguntaPai, p.resposta);
                        console.log(p);
                        if(p.resposta === undefined && p.id_perguntaPai === null){
                            console.log('inválido', p);
                            valid = false;
                        }
                        p.perguntas.forEach((sp) => {
                            if(sp.resposta === undefined && p.resposta > 0){
                                valid = false;
                            }
                        });
                    });
                    //}
                })
                //}
            });
            console.log('Válido:', valid);
            return valid;
        }

        //DIAGNÓSTICO PARCIAL
        if(tipo === 2){
            console.log('Validar Diagnóstico Parcial');
            let dimensoesComRespostas = getDimensoesComRespostas(respostas);

            dimensoes.forEach((d) => {
                //verifica primeiro se essa dimensão possui alguma resposta, pois só é validado dimensões que começaram a ser respondidas
                if(dimensoesComRespostas.includes(d.id_dimensao)){
                    d.indicadores.forEach((i) => {
                        i.perguntas.forEach((p) => {
                            console.log("numero_dimensao", "numero_indicador", "id_pergunta", "letra", "id_perguntaPai", "resposta");
                            console.log(d.numero, i.numero, p.id_pergunta, p.letra, p.id_perguntaPai, p.resposta);
                            console.log(p);
                            if(p.resposta === undefined && p.id_perguntaPai === null){
                                console.log('inválido', p);
                                valid = false;
                            }
                            p.perguntas.forEach((sp) => {
                                if(sp.resposta === undefined && p.resposta > 0){
                                    valid = false;
                                }
                            });
                        });
                    })
                }
            });
            console.log('Válido:', valid);
            return valid;
        }

    }

    const getDimensoesComRespostas = (respostas) => {
        let dimensoes = [];
        respostas.forEach((item) => {
            if(!dimensoes.includes(item.id_dimensao)){
                dimensoes.push(item.id_dimensao);
            }
        });
        return dimensoes;
    }

    const enviarRespostas = async () => {
        if(!validarRespostas()){
            //alert("Responda a todas as perguntas");
            setAlertFixed(1);
            return false;
        }
        let respostasApi = [];
        respostas.forEach((item) => {
            let valor = item.resposta === null ? 0 : item.resposta;
            let respostaApi =  {
                id_dimensao: item.id_dimensao,
                id_indicador: item.id_indicador,
                id_pergunta: item.id_pergunta,
                resposta: valor
            };
            respostasApi.push(respostaApi);
        });
        localStorage.setItem('respostas_diagnostico_completo', JSON.stringify(respostas));
        //console.log(respostas);
        //return;
        try {
            const jsonRespostas = JSON.stringify(respostasApi);
            /*const jsonDiagnostico = JSON.stringify({
                diagnostico: diagnostico,
                respostas: respostasApi,
                categorias: categoriasMarcadas
            });*/
            const result = await axios.post('api/resposta/insereRespostas', jsonRespostas, {
            //const result = await axios.post('api/resposta/insereRespostas', jsonDiagnostico, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(result.data.success){
                //const ids = JSON.parse(result.data.data)
                //localStorage.setItem('id_diagnostico_completo', ids[1]);
                localStorage.setItem('id_diagnostico_completo', result.data.data);
                location.href = 'resultado';
                console.log('redirecionamento desativado');
                return;
            }
            alert("Não foi possível gravar as respostas");
            console.log(result.data.message);
        } catch (error) {
            alert("Não foi possível carregar as dimensões");
            console.log(error);
        }
    }

    const setRespostasFromStorage = (dimensoes) => {
        const respostas = JSON.parse(localStorage.getItem('respostas_diagnostico_completo'));
        if(!respostas){
            return dimensoes;
        }
        setRespostas(respostas);
        //console.log(respostas);
        dimensoes.forEach((d) => {
            d.indicadores.forEach((i) => {
                i.perguntas.forEach((p) => {
                    const result = respostas.find(item => item.id_pergunta === p.id_pergunta);
                    //console.log('result id_pergunta', p.id_pergunta, result);
                    if(result){
                        p.resposta = result.resposta;
                    }
                    p.perguntas.forEach((sp) => {
                        const result = respostas.find(item => item.id_pergunta === sp.id_pergunta);
                        //console.log('result id_pergunta', sp.id_pergunta, result);
                        if(result){
                            sp.resposta = result.resposta;
                        }
                    });
                });
            })
        });
        return dimensoes;
    }

    /*const limparTodasRespostas = () => {
        let newDimensoes = dimensoes;
        newDimensoes.forEach((d) => {
            if(d.id_dimensao === dimensao.id_dimensao){
                d.indicadores.forEach((i) => {
                    if(i.id_indicador === indicador.id_indicador){
                        i.perguntas.forEach((p) => {
                                delete p.resposta;
                            p.perguntas.forEach((sp) => {
                                delete sp.resposta;
                            });
                        });
                    }
                })
            }
        });
        setDimensoes(newDimensoes);

        //Atualiza dimensao atual
        let newDimensao = newDimensoes.find((d) => {
            return d.id_dimensao = dimensao.id_dimensao;
        });
        setDimensao({});
        setDimensao(newDimensao);

        //Atualiza indicador atual
        let newIndicador = newDimensao.indicadores.find((i) => {
            return i.id_indicador = indicador.id_indicador;
        });
        setIndicador({})
        setIndicador(newIndicador);

        setRespostas([]);
        localStorage.removeItem('respostas_diagnostico_completo');
    }*/

    return (
        <div>
            <div className="alert alert-danger alert-fixed" role="alert" style={{display: alertFixed ? '' : 'none'}}>
                <a onClick ={() => setAlertFixed(0)} ><i className="fas fa-times float-end cursor"/></a>
                <i className="fas fa-exclamation-triangle"/>
                Responda a todas as perguntas
            </div>
            <DiagnosticoContext.Provider value={{
                tipo, setTipo,
                dimensao, setDimensao,
                dimensoes,
                dimensoesRespondidas, setDimensoesRespondidas,
                indicador, setIndicador,
                diagnostico,
                categorias,
                categoriasMarcadas,
                /*verificarResposta,*/
                setResposta,
                getResposta,
                validarRespostas,
                enviarRespostas,
                setDiagnostico,
                setCategoriasMarcadas
                /*limparTodasRespostas*/
            }}>
                {children}
            </DiagnosticoContext.Provider>
        </div>
    );
};
