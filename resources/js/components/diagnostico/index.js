const Diagnostico = () => {

    const { useContext } = React;
    const context = useContext(DiagnosticoContext);

    return (
        <div>
            <Header/>
            {
                context.tipo ? <Dimensoes/> : <br/> //null
            }
            {
                context.tipo ? (
                    <div className="text-center">
                        <button className="btn btn-lg btn-primary" onClick={() => context.enviarRespostas()}>Enviar Respostas</button>
                    </div>
                ) : null
            }
            <br/>
        </div>
    );
};

ReactDOM.render(
    <DiagnosticoProvider>
        <Diagnostico />
    </DiagnosticoProvider>,
    document.getElementById('diagnostico')
);
