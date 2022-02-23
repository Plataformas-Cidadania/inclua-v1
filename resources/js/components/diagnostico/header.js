//import React from 'react';

const Header = () => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [textDiagnosticoDescricao, setTextDiagnosticoDescricao] = useState(null);
    const [varLocalStorage, setlocalStorage] = useState(localStorage.getItem('id_diagnostico'));
    const [respostasLocalStorage, setRespostasLocalStorage] = useState(localStorage.getItem('respostas_diagnostico'));

    useEffect(() => {
        getTextDiagnostico("pg-diagnostico");
    }, [])

    const ClicklocalStorage = (key) => {
        setlocalStorage();
        localStorage.removeItem('id_diagnostico')
        localStorage.removeItem('ids_dimensoes')
        localStorage.removeItem('respostas_diagnostico')
        location.href = "diagnostico"
    }

    const getTextDiagnostico = async (slug) => {
        try {
            const result = await axios.get('text/'+slug);
            setTextDiagnosticoDescricao(result.data.descricao)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-lgt">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">&nbsp;</div>
                    <div className="col-md-7">
                        <div>
                            <br/><br/>
                            <h1 dangerouslySetInnerHTML={{__html: text_diagnostico_titulo}}/>
                            <p dangerouslySetInnerHTML={{__html: textDiagnosticoDescricao}}/>


                            <div className="row" style={{display: 'none'}}>
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





                            <div className="row">


                                <div className="col text-center cursor" >
                                    <a href="diagnostico/completo">
                                        <div className="btn-icon btn-icon-hover" style={parseInt(context.tipo) === 1 ? {
                                            top: 0,
                                            boxShadow: "2px 2px 8px #9b9898",
                                            transform: "scale(1.1)"
                                        } : {
                                            top: 0,
                                        }}>
                                            <img src="img/icon-completo.png" alt="Completo" title="Completo" width="75%"/>
                                        </div>
                                        <p className="mt-2">Completo</p>
                                    </a>
                                </div>
                                <div className="col text-center cursor" >
                                    <a href="diagnostico/parcial">
                                        <div className="btn-icon btn-icon-hover" style={parseInt(context.tipo) === 2 ? {
                                            top: 0,
                                            boxShadow: "2px 2px 8px #9b9898",
                                            transform: "scale(1.1)"
                                        } : {
                                            top: 0,
                                        }}>
                                            <img src="img/icon-parcial.png" alt="Parcial" title="Parcial" width="75%"/>
                                        </div>
                                        <p className="mt-2">Parcial</p>
                                    </a>
                                </div>
                                <div className={"col text-center " + (varLocalStorage ? '' : 'opacity-5')} >
                                    <a
                                        href={(varLocalStorage ? 'resultado' : '#')}
                                        style={{cursor: (varLocalStorage ? 'pointer' : 'auto')}}
                                    >
                                        <div className="btn-icon btn-icon-hover" style={{top: 0}}>
                                            <img src="img/icon-analise.png" alt="Resultado" title="Resultado" width="75%"/>
                                        </div>
                                        <p className="mt-2">Resultado</p>
                                    </a>
                                </div>
                                {/*<div className="col text-center  opacity-5" >
                                    <div className="btn-icon btn-icon-hover">
                                        <img src="img/icon-recurso.png" alt="Recursos" title="Recursos" width="100%"/>
                                    </div>
                                    <p className="mt-2">Análise</p>
                                </div>*/}
                                                {/*<div className={"col text-center " + (varLocalStorage ? '' : 'opacity-5')}>
                                    <a
                                        href={(varLocalStorage ? 'resultado' : '#')}
                                        style={{cursor: (varLocalStorage ? 'pointer' : 'auto')}}
                                    >
                                        <div className="btn-icon btn-icon-hover" style={{top: 0}}>
                                            <img src="img/icon-recurso.png" alt="Recursos" title="Recursos" width="75%"/>
                                        </div>
                                        <p className="mt-2">Recursos</p>
                                    </a>
                                </div>*/}

                                <div className={"col text-center " + (varLocalStorage || respostasLocalStorage ? '' : 'opacity-5')}>
                                    <div className="btn-icon btn-icon-hover cursor" style={{top: 0}}  onClick={() => ClicklocalStorage()}>
                                        <img src="img/icon-limpar.png" alt="Parcial" title="Parcial" width="75%"/>
                                    </div>
                                    <p className="mt-2">Limpar</p>
                                </div>

                                {/*<div>
                                    <div className="float-start cursor" style={{position: 'absolute', left: '15px'}}  onClick={() => context.setShowMenuDiagnostico(!context.showMenuDiagnostico)}> <i className="fas fa-angle-left"/> Voltar</div>
                                    <a href="recursos" className="float-end" style={{position: 'absolute', right: '15px'}}>Biblioteca <i className="fas fa-angle-right"/></a>
                                </div>*/}
                            </div>








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
