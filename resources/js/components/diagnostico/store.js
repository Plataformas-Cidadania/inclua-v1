
const DiagnosticoContext = React.createContext({});

const DiagnosticoProvider = ({children}) => {

    const {useState, useEffect} = React;

    const [tipo, setTipo] = useState(null);
    const [dimensoes, setDimensoes] = useState([]);
    const [dimensao, setDimensao] = useState({info:{}, indicadores:[]});
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

    useEffect(() => {
        console.log(indicador);
    }, [indicador]);

    const listDimensoes = async () => {
        try {
            //const result = await axios.get('json/diagnostico.json');
            const result = await axios.get('api/dimensao');
            if(result.data.success){
                const dimensoes = result.data.data
                setDimensoes(dimensoes)
                setDimensao(dimensoes[0]);//pega a primeira dimensão
                return;
            }
            alert("Não foi possível carregar as dimensões");
        } catch (error) {
            alert("Não foi possível carregar as dimensões");
            console.log(error);
        }
    }

    const verificarResposta = (idPergunta, value) => {
        console.log('Verificar Resposta');
        return false;
        let pergunta = indicador.perguntas.filter(obj => obj.id === idPergunta);
        console.log(idPergunta, pergunta.resposta, value, pergunta.resposta === value);
        return pergunta.resposta === value;
    }

    const setResposta = (idPergunta, value) => {
        console.log('setResposta');
        console.log(idPergunta, value);
        let newDimensoes = dimensoes;
        newDimensoes.forEach((d) => {
            if(d.id === dimensao.id){
                d.indicadores.forEach((i) => {
                    if(i.id === indicador.id){
                        i.perguntas.forEach((p) => {
                            if(p.id === idPergunta){
                                p.resposta = parseInt(value);
                            }
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
                newRespostas[i].resposta = parseInt(value);
                existeResposta = true;
                break;
            }
        };
        if(!existeResposta){
            newRespostas.push({id_dimensao: dimensao.id_dimensao, id_indicador: indicador.id_indicador, id_pergunta: idPergunta, resposta: parseInt(value)});
        }
        setRespostas(newRespostas);
        console.log(newRespostas);
    }

    const getResposta = (idPergunta) => {
        console.log('getResposta');
        console.log(idPergunta);
        let resposta = null;
        dimensoes.forEach((d) => {
            if(d.id === dimensao.id){
                d.indicadores.forEach((i) => {
                    if(i.id === indicador.id){
                        i.perguntas.forEach((p) => {
                            if(p.id === idPergunta){
                                resposta = p.resposta;
                            }
                        });
                    }
                })
            }
        });
        console.log(resposta);
        return resposta;
    }

    return (
        <DiagnosticoContext.Provider value={{
            tipo, setTipo,
            dimensao, setDimensao,
            dimensoes,
            dimensoesRespondidas, setDimensoesRespondidas,
            indicador, setIndicador,
            verificarResposta,
            setResposta,
            getResposta
        }}>
            {children}
        </DiagnosticoContext.Provider>
    );
};
