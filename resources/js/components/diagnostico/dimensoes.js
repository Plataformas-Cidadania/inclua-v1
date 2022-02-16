const Dimensoes = () => {

    const context = React.useContext(DiagnosticoContext);

    let bgColor = {
        1:'bg-pri',
        2:'bg-sec',
        3:'bg-ter',
        4:'bg-qua',
        5:'bg-qui',
    };
    bgColor = bgColor[context.dimensao.numero];

    const handleDiagnostico = (event) => {
        let newDiagnostico = {
            ...context.diagnostico,
            [event.target.id]: event.target.value
        }
        context.setDiagnostico(newDiagnostico);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    {/*<div className="col-md-12 text-center">
                        <br/>
                        <button className="btn btn-lg btn-primary" onClick={() => context.limparTodasRespostas()}>Limpar Todas as Respostas</button>
                    </div>*/}
                    <div className="col-md-12">
                        <br/>
                        <div className="row">
                            <form>
                                <div className="col-md-12">
                                    <label htmlFor="ofertaPublica"><strong>Oferta pública sob foco</strong></label>
                                    <input
                                        className="form-control form-g"
                                        type="text"
                                        name="ofertaPublica"
                                        id="ofertaPublica"
                                        onChange={handleDiagnostico}
                                        placeholder="ex.: serviço, programa, política, projeto, iniciativa, ação, etc."
                                    />
                                </div>
                                <br/>
                                <div className="col-md-12">
                                    <label htmlFor="ofertaPublica"><strong>Qual(is) grupo(s) ou população(ões) específica(s) irá focar?</strong></label>
                                    <input className="form-control form-g" type="text" name="grupos" id="grupos"  onChange={handleDiagnostico}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="col-md-12 text-center">
                        <div className="text-center nav-icons">
                            {
                                context.dimensoes.map((item, key) => {
                                    //let classe =  ? 'nav-icons-select' : '';
                                    let classe = "cursor ";
                                    if(item.numero === context.dimensao.numero) {
                                        classe += "nav-icons-select ";
                                    }
                                    if(
                                        !context.dimensoesRespondidas.includes(item.numero) &&
                                        item.numero !== context.dimensao.numero
                                    ) {
                                        classe += "opacity-5";
                                    }
                                    return (
                                        <img key={"icone-dimensao-"+key}
                                            src={"img/dimensao"+item.numero+".png"}
                                            alt=""
                                            className={classe}
                                            onClick={() => context.setDimensao(item)}
                                        />
                                    )
                                })
                            }
                            {/*<img src="img/dimensao1.png" alt=""/>
                            <img src="img/dimensao2.png" alt="" className="nav-icons-select"/>
                            <img src="img/dimensao3.png" alt="" className="opacity-5"/>
                            <img src="img/dimensao4.png" alt="" className="opacity-5"/>
                            <img src="img/dimensao5.png" alt="" className="opacity-5"/>*/}
                            <hr/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dorder-container" style={{marginLeft: '10px'}}>
                <div className={bgColor}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <img src={"img/dimensao"+context.dimensao.numero+"-g.png"} alt=""/>
                                <h2>DIMENSÃO {context.dimensao.numero}</h2>
                            </div>
                            <div className="col-md-9">
                                <h2 className="mt-5">{context.dimensao.titulo}</h2>
                                <p className="mb-5">{context.dimensao.descricao}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <Indicadores/>
        </div>
    );
};


