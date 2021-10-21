const Diagnostico = () => {

    const { useContext } = React;

    const context = useContext(DiagnosticoContext);

    return (
        <div>
            <Header/>
            {
                context.tipo ? <Dimensoes/> : <br/> //null
            }
        </div>
    );
};

ReactDOM.render(
    <DiagnosticoProvider>
        <Diagnostico />
    </DiagnosticoProvider>,
    document.getElementById('diagnostico')
);
