const Indicadores = () => {

    const context = React.useContext(DiagnosticoContext);
    const {useState, useEffect} = React;

    const [dimensao, setDimensao] = useState(0);
    const [indicador, setIndicador] = useState(0);
    const [titulo, setTitulo] = useState(0);
    const [descricao, setDescricao] = useState(0);

    useEffect(() => {
        setDimensao(context.dimensao.info.dimensao);
        setIndicador(context.indicador.indicador);
        setTitulo(context.indicador.titulo);
        setDescricao(context.indicador.descricao);
    }, [context.dimensao, context.indicador]);

    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-6 col-6">
                    <h2>INDICADOR {dimensao}.{indicador}</h2>
                </div>
                <div className="col-6 col-6 d-grid gap-2 d-md-flex justify-content-end">
                    <div className="nav-circle">
                        <i className="fas fa-circle tx-pri"/>
                        <i className="far fa-circle tx-pri"/>
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
                    <div className="box-items bg-lgt">
                        <p className="mb-3"><strong>P1.1a</strong> Caso o processo de implementação dessa oferta pública
                            envolva mais de uma organização (ou múltiplas unidades de uma organização) responsável por
                            etapas diferentes da produção do bem ou serviço, existem espaços e mecanismos para promover
                            a coordenação e a articulação das ações entre essas organizações? [Por exemplo: reuniões
                            periódicas, comitês gestores, instâncias de mediação, etc.] Marque uma opção abaixo.</p>
                        <div className="form-check float-start">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault1"/>
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Sim
                            </label>
                        </div>
                        <div className="form-check  float-end">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                   id="flexRadioDefault2" checked/>
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Não
                            </label>
                        </div>
                        <div className="clear-both">&nbsp;</div>
                    </div>
                    <br/>
                </div>

                <div className="col-md-12">
                    <div className="box-items bg-lgt">
                        <p><strong>P2.1a</strong> Caso o processo de implementação dessa oferta pública envolva mais de
                            uma organização (ou múltiplas unidades de uma organização) responsável por etapas diferentes
                            da produção do bem ou serviço, existem espaços e mecanismos para promover a coordenação e a
                            articulação das ações entre essas organizações? [Por exemplo: reuniões periódicas, comitês
                            gestores, instâncias de mediação, etc.] Marque uma opção abaixo.</p>
                        <div>
                            <br/>
                            <div className="range-merker">
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item bg-pri">1</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item bg-pri">2</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item bg-pri">3</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">4</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">5</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">6</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">7</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">8</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">9</div>
                                </div>
                                <div className="range-merker-box">
                                    <div className="range-merker-box-item">10</div>
                                </div>
                            </div>
                            {/*<label for="customRange1" className="form-label">Bom</label>*/}
                            <br/>
                            <input type="range" className="form-range range" id="customRange1" min="1" max="10" value="3"/>
                        </div>
                    </div>
                    <br/>
                </div>

                <div className="col-md-12">
                    <div className="row mt-4 mb-4">
                        <div className="col-6 col-6  d-grid gap-2 d-md-flex justify-content-start">
                            <div className="nav-circle mt-2 ">
                                <i className="fas fa-circle tx-pri"/>
                                <i className="far fa-circle tx-pri"/>
                            </div>
                        </div>
                        <div className="col-6 col-6">
                            {
                                context.dimensao.indicadores.length > indicador ? (
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <div className="dorder-container">
                                            <button className="btn btn-theme bg-pri" type="button"
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