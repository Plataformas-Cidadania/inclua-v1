
const DiagnosticoContext = React.createContext({});

const DiagnosticoProvider = ({children}) => {

    const {useState, useEffect} = React;

    const [tipo, setTipo] = useState(null);
    const [dimensoes, setDimensoes] = useState([]);
    const [dimensao, setDimensao] = useState({info:{}, indicadores:[]});
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

    useEffect(() => {
        console.log(indicador);
    }, [indicador]);

    const listDimensoes = async () => {
        try {
            //const result = await axios.get('teste-dimensoes');
            const result = await axios.get('json/diagnostico.json');
            setDimensoes(result.data)
            setDimensao(result.data[0]);//pega a primeira dimensão
        } catch (error) {
            console.log(error);
        }
    }

    const verificarResposta = (idPergunta, value) => {
        let pergunta = indicador.perguntas.filter(obj => obj.id === idPergunta);
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
                                p.resposta = value;
                            }
                        });
                    }
                })
            }
        });
        setDimensoes(newDimensoes);
        console.log(newDimensoes);
    }

    return (
        <DiagnosticoContext.Provider value={{
            tipo, setTipo,
            dimensao, setDimensao,
            dimensoes,
            dimensoesRespondidas, setDimensoesRespondidas,
            indicador, setIndicador,
            verificarResposta,
            setResposta
        }}>
            {children}
        </DiagnosticoContext.Provider>
    );
};
