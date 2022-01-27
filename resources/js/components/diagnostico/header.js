//import React from 'react';

const Header = () => {

    const context = React.useContext(DiagnosticoContext);

    console.log('tipo:', context.tipo);

    return (
        <div className="bg-lgt">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-7">
                        <div>
                            <br/><br/>
                            <h1>Diagnóstico</h1>
                            <p>Instruções: essa atividade dura aproximadamente de XX a XX minutos e deve ser
                                realizada com bastante atenção de forma a retratar com a maior precisão possível a
                                situação da oferta pública na qual você está envolvido. Caso prefira, você pode
                                baixar o questionário, ler e reunir as informações necessárias para então voltar
                                aqui e responder às perguntas.</p>
                            <br/>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="dorder-container cursor" onClick={() => context.setTipo(1)}>
                                        <div className="bg-lgt2 p-3">
                                            <h2 style={{marginTop: '15px'}}>Completo</h2>
                                            <span style={{display: parseInt(context.tipo) !== 1  ? 'none' : ''}}>
                                                <i className={"far fa-check-circle fa-3x float-end "} style={{marginTop: '-52px'}}/>
                                            </span>
                                            <span style={{display: parseInt(context.tipo) === 1  ? 'none' : ''}}>
                                                <i className={"fas fa-angle-right fa-3x float-end "} style={{marginTop: '-52px'}}/>
                                            </span>
                                        </div>
                                    </div>
                                    <br/>
                                </div>
                                <div className="col-md-6">
                                    <div className="dorder-container cursor" onClick={() => context.setTipo(2)}>
                                        <div className="bg-lgt2 p-3">
                                            <h2 style={{marginTop: '15px'}}>Parcial</h2>
                                            <span style={{display: parseInt(context.tipo) !== 2  ? 'none' : ''}}>
                                                <i className={"far fa-check-circle fa-3x float-end "} style={{marginTop: '-52px'}}/>
                                            </span>
                                            <span style={{display: parseInt(context.tipo) === 2  ? 'none' : ''}}>
                                                <i className={"fas fa-angle-right fa-3x float-end "} style={{marginTop: '-52px'}}/>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <br/>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <img src="/img/bg-top.png" alt="" width="80%" className="float-end"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

//export default Header;
