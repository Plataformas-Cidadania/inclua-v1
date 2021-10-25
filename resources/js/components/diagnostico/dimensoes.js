const Dimensoes = () => {

    const context = React.useContext(DiagnosticoContext);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="text-center nav-icons">
                            {
                                context.dimensoes.map((item, key) => {
                                    //let classe =  ? 'nav-icons-select' : '';
                                    let classe = "cursor ";
                                    if(item.info.dimensao === context.dimensao.info.dimensao) {
                                        classe += "nav-icons-select ";
                                    }
                                    if(
                                        !context.dimensoesRespondidas.includes(item.info.dimensao) &&
                                        item.info.dimensao !== context.dimensao.info.dimensao
                                    ) {
                                        classe += "opacity-5";
                                    }
                                    return (
                                        <img key={"icone-dimensao-"+key}
                                            src={"img/dimensao"+item.info.dimensao+".png"}
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
                <div className="bg-pri">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 text-center">
                                <img src={"img/dimensao"+context.dimensao.info.dimensao+"-g.png"} alt=""/>
                                <h2>DIMENSÃO {context.dimensao.info.dimensao}</h2>
                            </div>
                            <div className="col-md-9">
                                <h2 className="mt-5">{context.dimensao.info.titulo}</h2>
                                <p className="mb-5">{context.dimensao.info.descricao}</p>
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


