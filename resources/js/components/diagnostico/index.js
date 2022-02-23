
const Diagnostico = () => {

    const { useContext, useEffect } = React;
    const context = useContext(DiagnosticoContext);

    useEffect(() => {
        if(tipo && context.indicador){
            console.log('setTipo', tipo);
            //console.log('dimensoes', context.dimensoes);
            context.setTipo(tipo);
        }
    }, [context.indicador]);

    return (
        <div>
            <Header/>
            {
                context.tipo ? <Dimensoes/> : <br/> //null
            }
            {
                context.tipo ? (
                    <div className="text-center">
                        <button className="btn btn-lg btn-primary" onClick={() => context.enviarRespostas()}>
                            Enviar Respostas para {parseInt(context.tipo) === 1 ? "Diagnóstico Completo" : "Diagnóstico Parcial"}
                        </button>
                    </div>
                ) : null
            }
            <br/>
        </div>
    );
};

ReactDOM.render(
    <DiagnosticoProvider>
        <Diagnostico tipo={tipo} />
    </DiagnosticoProvider>,
    document.getElementById('diagnostico')
);
