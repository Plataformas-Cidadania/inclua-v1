//import React from 'react';

const Header = () => {

    const context = React.useContext(DiagnosticoContext);

    return (
        <div className="bg-lgt">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-7">
                        <div>
                            <br/><br/>
                            <h1 dangerouslySetInnerHTML={{__html: text_diagnostico_titulo}}/>
                            <p dangerouslySetInnerHTML={{__html: text_diagnostico_descricao}}/>

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
