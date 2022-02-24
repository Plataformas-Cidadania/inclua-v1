const Dimensoes = () => {

    const context = React.useContext(DiagnosticoContext);

    const {useState, useEffect} = React;

    const [categorias, setCategorias] = useState([]);
    const [categoriasMarcadas, setCategoriasMarcadas] = useState([]);
    const [categoriaClicada, setCategoriaClicada] = useState(0);

    let bgColor = {
        1:'bg-pri',
        2:'bg-sec',
        3:'bg-ter',
        4:'bg-qua',
        5:'bg-qui',
    };
    bgColor = bgColor[context.dimensao.numero];

    useEffect(() => {
        setCategorias(context.categorias);
    },[context.categorias])

    useEffect(() => {
        context.setCategoriasMarcadas(categoriasMarcadas);
    },[categoriasMarcadas])

    const handleDiagnostico = (event) => {
        let newDiagnostico = {
            ...context.diagnostico,
            [event.target.id]: event.target.value
        }
        context.setDiagnostico(newDiagnostico);
        localStorage.setItem('diagnostico', JSON.stringify(newDiagnostico));
    }

    const marcarDesmarcarCategoria = (id_categoria) => {
        //console.log(id_categoria);
        let newCategorias = categorias;
        newCategorias.forEach((item) => {
            if(item.id_categoria === id_categoria){
                item.marcada = item.marcada === 1 ? 0 : 1;
                console.log(item, id_categoria);
            }
        });
        setCategorias(newCategorias);
        setCategoriaClicada(id_categoria);
        //console.log(newCategorias);


        let newCategoriasMarcadas = categoriasMarcadas;
        if(categoriasMarcadas.includes(id_categoria)){
            newCategoriasMarcadas = newCategoriasMarcadas.filter(item => item !== id_categoria)
            setCategoriasMarcadas(newCategoriasMarcadas);
            localStorage.setItem('categorias_diagnostico', JSON.stringify(newCategoriasMarcadas));
            return;
        }
        newCategoriasMarcadas.push(id_categoria);
        setCategoriasMarcadas(newCategoriasMarcadas);
        localStorage.setItem('categorias_diagnostico', JSON.stringify(newCategoriasMarcadas));

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
                                    <label htmlFor="oferta_publica"><strong>Oferta pública sob foco</strong></label>
                                    <input
                                        className="form-control form-g"
                                        type="text"
                                        name="oferta_publica"
                                        id="oferta_publica"
                                        onChange={handleDiagnostico}
                                        placeholder="ex.: serviço, programa, política, projeto, iniciativa, ação, etc."
                                    />
                                </div>
                                <br/>
                                <div className="col-md-12">
                                    <label htmlFor="grupo_focal"><strong>Qual(is) grupo(s) ou população(ões) específica(s) irá focar?</strong></label>
                                    <input className="form-control form-g" type="text" name="grupo_focal" id="grupo_focal"  onChange={handleDiagnostico}/>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="col-md-12">
                        <br/>
                        <div>Assinale as opções abaixo que se relacionam com a oferta pública e/ou o grupo(s) específico(s) em relação aos queis irá conduzir o dianóstico:</div>
                        <div>(OBS.: Os temas marcados nos ajudarão a apresentar sugestões pertinentes de recursos para a intervenção)
                        </div>
                        <div><strong>Selecione as categorias</strong></div>
                        <br/>
                        {
                            context.categorias ? (
                                context.categorias.map((item, key) => {
                                    return (
                                        <div
                                            key={"categoria"+key}
                                            id={"btnCategoria"+key}
                                            className={"btn btn-sm btn-"+(item.marcada === 1 ? "info" : "default")}
                                            onClick={() => marcarDesmarcarCategoria(item.id_categoria)}
                                            style={{margin: "8px", border: "solid 1px #ccc"}}
                                        >
                                            {item.nome}
                                        </div>
                                    );
                                })
                            ) : null
                        }
                    </div>
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


