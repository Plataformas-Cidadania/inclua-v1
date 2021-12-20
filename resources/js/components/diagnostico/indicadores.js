const Indicadores = () => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [dimensao, setDimensao] = useState(0);
    const [indicador, setIndicador] = useState(0);
    const [titulo, setTitulo] = useState(0);
    const [descricao, setDescricao] = useState(0);
    const circleClosed = <i className="fas fa-circle tx-pri"/>;
    const circleOpen = <i className="far fa-circle tx-pri"/>;

    useEffect(() => {
        setDimensao(context.dimensao.numero);
        setIndicador(context.indicador.numero);
        setTitulo(context.indicador.titulo);
        setDescricao(context.indicador.descricao);
    }, [context.dimensao, context.indicador]);

    let bgColorPx = {
        1:'bg-pri',
        2:'bg-sec',
        3:'bg-ter',
        4:'bg-qua',
        5:'bg-qui',
    };
    let bgColor = {
        1:'bg-pri',
        2:'bg-sec',
        3:'bg-ter',
        4:'bg-qua',
        5:'bg-qui',
    };

    bgColor = bgColor[context.dimensao.numero];
    bgColorPx = bgColorPx[(context.dimensao.numero+1)];

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-6 col-6">
                    <h2>INDICADOR {dimensao}.{indicador}</h2>
                </div>
                <div className="col-6 col-6 d-grid gap-2 d-md-flex justify-content-end">
                    <div className="nav-circle">
                        {
                            context.dimensao.indicadores.map((item, key) => {
                                if(item.numero === indicador){
                                    return (
                                        <div key={"circle-on"+key} onClick={() => context.setIndicador(item)} className={"cursor circle-icon " + bgColor}/>
                                    )
                                }else{
                                    return (
                                        <div key={"circle-off"+key} onClick={() => context.setIndicador(item)} className={"cursor circle-icon "}/>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
                <div className="col-md-12">
                    <hr style={{marginTop: '1px'}}/>
                </div>
                <div className="col-md-12 mt-3">
                    <h3>{titulo}</h3>
                    <p>{descricao}</p>
                    <br/>
                </div>
                <div className="col-md-12">
                    <Perguntas perguntas={context.indicador.perguntas} bgColor={bgColor} subperguntas={false}/>
                </div>

                <div className="col-md-12">
                    <div className="row mt-4 mb-4">
                        <div className="col-4 col-4  d-grid gap-2 d-md-flex justify-content-start">
                            <div className="nav-circle mt-2 ">
                                {
                                    context.dimensao.indicadores.map((item, key) => {
                                        if(item.numero === indicador){
                                            return (
                                                <div key={"circle-on"+key} onClick={() => context.setIndicador(item)} className={"cursor circle-icon " + bgColor}/>
                                            )
                                        }else{
                                            return (
                                                <div key={"circle-off"+key} onClick={() => context.setIndicador(item)} className={"cursor circle-icon "}/>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-8 col-8">
                            {
                                context.dimensao.indicadores.length <= indicador ? (
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end float-end">
                                        <div className="dorder-container">
                                            <button className={"btn btn-theme " + bgColor} type="button"
                                                    onClick={() => context.setIndicador(context.dimensao.indicadores[indicador-2])}>
                                                <i className="fas fa-angle-left"/> indicador {dimensao}.{indicador-1}
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            }

                            {
                                context.dimensao.indicadores.length > indicador ? (
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end float-end ms-2">
                                        <div className="dorder-container">
                                            <button className={"btn btn-theme " + bgColorPx} type="button"
                                                /*onClick={() => context.setIndicador(context.dimensao.indicadores[indicador])}*/
                                                onClick={() => context.setDimensao(context.dimensao+1)}
                                            >
                                                dimensão {dimensao+1} <i className="fas fa-angle-right"/>
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            }

                            {
                                context.dimensao.indicadores.length > indicador ? (
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end float-end">
                                        <div className="dorder-container">
                                            <button className={"btn btn-theme " + bgColor} type="button"
                                                    onClick={() => context.setIndicador(context.dimensao.indicadores[indicador])}>
                                                indicador {dimensao}.{indicador+1} <i className="fas fa-angle-right"/>
                                            </button>
                                        </div>
                                    </div>
                                ) : null
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

