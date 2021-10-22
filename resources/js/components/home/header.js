const Header = () => {

    const context = React.useContext(HomeContext);


    return (
        <div className="container">
            <div className="row">
                <div className="col" onClick={() => context.setShowMenuDiagnostico(!context.showMenuDiagnostico)}>
                    <div className="dorder-container">
                        <div className="dorder-container-mai">
                            <div className="btn-icon">
                                <img src="img/icon-diagnostico.png" alt="Diagnóstico" title="Diagnóstico" width="100%"/>
                            </div>
                            <h2 className="btn-icon-h2">Diagnóstico</h2>
                            <div className="clear-both"/>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="dorder-container">
                        <div className="dorder-container-mai">
                            <div className="btn-icon">
                                <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%"/>
                            </div>
                            <h2 className="btn-icon-h2">Biblioteca</h2>
                            <div className="clear-both"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row" style={{display: context.showMenuDiagnostico ? '' : 'none'}}>
                <div className="col-md-12">
                    <br/><br/>
                </div>
                <div className="col text-center cursor" >
                    <div className="btn-icon btn-icon-hover">
                        <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%"/>
                    </div>
                    <p className="mt-2">Completo</p>
                </div>
                <div className="col text-center cursor" >
                    <div className="btn-icon btn-icon-hover">
                        <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%"/>
                    </div>
                    <p className="mt-2">Parcial</p>
                </div>
                <div className="col text-center  opacity-5" >
                    <div className="btn-icon btn-icon-hover">
                        <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%"/>
                    </div>
                    <p className="mt-2">Resultado</p>
                </div>
                <div className="col text-center  opacity-5" >
                    <div className="btn-icon btn-icon-hover">
                        <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%"/>
                    </div>
                    <p className="mt-2">Análise</p>
                </div>
                <div className="col text-center  opacity-5" >
                    <div className="btn-icon btn-icon-hover">
                        <img src="img/icon-biblioteca.png" alt="Biblioteca" title="Biblioteca" width="100%"/>
                    </div>
                    <p className="mt-2">Recursos</p>
                </div>
            </div>
        </div>
    );
};

