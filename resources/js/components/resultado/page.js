const Page = () => {

    const {useState, useEffect} = React;
    const [resultado, setResultado] = useState([]);
    const [groupRecurso, setGroupRecurso] = useState(null);
    const [dimensao, setDimensao] = useState(0);
    const [categoriaResultado, setCategoriaResultado] = useState([]);


    useEffect(() => {
        setDimensao(primeiraDimensaoRespondida());
    }, [])

    useEffect(() => {
        Resultado();
        categoriasResultado();
    }, [dimensao]);

    const Resultado = async () => {
        try {
            //const result = await axios.get('json/resultado.json');
            const result = await axios.get("api/diagnostico/"+dimensao+"/"+localStorage.getItem('id_diagnostico'));
            setResultado(result.data)
            console.log('***', Math.round(result.data.indicadores[0].posPontos));
        } catch (error) {
            console.log(error);
        }
    }

    const categoriasResultado = async () => {
        try {
            const result = await axios.get("api/categoria_diagnostico/nomes/"+localStorage.getItem('id_diagnostico'));
            setCategoriaResultado(result.data.data);

        } catch (error) {
            console.log(error);
        }
    }

    const primeiraDimensaoRespondida = () => {
        const respostas = JSON.parse(localStorage.getItem('respostas_diagnostico'));
        const dimensoesRespondidas = respostas.map((item) => {
            return item.id_dimensao;
        })
        const idsDimensoesRespondidas = dimensoesRespondidas.filter((value, key) => dimensoesRespondidas.indexOf(key) !== key);
        return idsDimensoesRespondidas.sort().shift();
    }

    const ClickRecurso = (key) => {
        key = groupRecurso===key ? null : key;
        setGroupRecurso(key);
    }

    const ClickDimensao = (id) => {
        setDimensao(id);
    }

    let bgColor = {
        1:'bg-pri',
        2:'bg-sec',
        3:'bg-ter',
        4:'bg-qua',
        5:'bg-qui',
    };

    //bgColor = bgColor[resultado.id_dimensao];
    bgColor = bgColor[dimensao];

    //console.log('----', resultado.indicadores);

    return (
        <div>
            <div className="container-fluid">
                <div className="p-3">&nbsp;</div>
                <div className="dorder-container">
                    <div className="bg-lgt dorder-container-mai">
                        <div className="dorder-container-line">
                            <h1>Diagnóstico {resultado.tipo_diagnostico === 1 ? 'Completo' : 'Parcial'}</h1>
                            <div className="dorder-container-box bg-lgt"/>
                        </div>
                    </div>
                </div>
                <div>&nbsp;</div>
            </div>

            <div className="container-fluid  bg-lgt">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="p-3">
                                        <p>
                                            <strong>Oferta pública sob foco</strong><br/>
                                            {resultado.oferta_publica}
                                            <br/><br/>
                                            <strong>Qual(is) grupo(s) ou população(ões) específica(s) irá focar?</strong><br/>
                                            {resultado.grupo_focal}
                                            <br/><br/>
                                            <strong>Categorias selecionadas</strong><br/>
                                            <ul style={{padding: '0'}}>
                                                {
                                                    categoriaResultado.map((item, key) => {
                                                        return(
                                                            <li style={{display: 'inline-block', border: "solid 1px #333333", padding: '5px 10px', margin: '5px', borderRadius: '3px'}} key={key}>
                                                                {item}
                                                            </li>
                                                        )
                                                    })
                                                }

                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <img src="/img/bg-top.png" alt="" width="80%" className="float-end"/>
                    </div>
                </div>
            </div>




            <div className="container">
                <div className="row">
                    <div className="col-md-11 text-center">
                        <div className="text-center nav-icons">
                            <img src="img/dimensao1.png" alt="" onClick={() => ClickDimensao(1)} className={"cursor " + (dimensao===1 ? "nav-icons-select" : "opacity-5")} />
                            <img src="img/dimensao2.png" alt="" onClick={() => ClickDimensao(2)} className={"cursor " + (dimensao===2 ? "nav-icons-select" : "opacity-5")}/>
                            <img src="img/dimensao3.png" alt="" onClick={() => ClickDimensao(3)} className={"cursor " + (dimensao===3 ? "nav-icons-select" : "opacity-5")}/>
                            <img src="img/dimensao4.png" alt="" onClick={() => ClickDimensao(4)} className={"cursor " + (dimensao===4 ? "nav-icons-select" : "opacity-5")}/>
                            <img src="img/dimensao5.png" alt="" onClick={() => ClickDimensao(5)} className={"cursor " + (dimensao===5 ? "nav-icons-select" : "opacity-5")}/>
                            <hr/>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <br/>
                        <a href="/imprimir" target="_blank">
                            <img src="/img/print.png" alt="" className="float-end m-2 cursor" style={{width: '35px'}}/>
                        </a>
                    </div>

                </div>
            </div>

            {
                resultado.pontos === 0 ? (
                    <div className="row">
                        <div className="col-md-12">
                            <div className={bgColor}>
                                <div className="row">
                                    <div className="col-md-2 text-center">
                                        <img src={"img/dimensao" + dimensao + "-g.png"} alt="" width="100"/>
                                        <h2>DIMENSÃO {dimensao}</h2>
                                    </div>
                                    <div className="col-md-8">
                                        <h2 className="mt-5">{resultado.titulo}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <br/>
                            <br/>
                            <h2 className="text-center">A DIMENSÃO {dimensao} não foi respondida neste diagnóstico</h2>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="row">
                            <div className="col-md-12">
                                <div className={bgColor}>
                                    <div className="row">
                                        <div className="col-md-2 text-center">
                                            <img src={"img/dimensao" + dimensao + "-g.png"} alt="" width="100"/>
                                            <h2>DIMENSÃO {dimensao}</h2>
                                        </div>
                                        <div className="col-md-8">
                                            <h2 className="mt-5">{resultado.titulo}</h2>
                                            <p className="mb-5">Veja abaixo os resultados por indicador:</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <br/>
                                            <h2><strong>{resultado.risco}</strong></h2>
                                            {/*<h2 style={{fontSize: '40px'}}>{resultado.pontos}</h2>
                                            <p>pontos</p>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                {/*<div className="col-md-12">
                                    <a href="/imprimir" target="_blank">
                                        <img src="/img/print.png" alt="" className="float-end m-2 cursor" style={{width: '35px'}}/>
                                    </a>
                                </div>*/}

                                {
                                    resultado.indicadores ?
                                        resultado.indicadores.map((item, key) => {
                                            return (
                                                <div className="col-md-12" key={'indicadores_'+key}>
                                                    <h2><br/>Indicador {item.numero} - {item.titulo}</h2>
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <BarChart id={'bar-chart'+key} series={item.series} annotationsX={Math.round(item.posPontos)}/>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="text-right">
                                                                <div className="row">
                                                                    <div className="col-md-8">
                                                                        <br/>
                                                                        <p><strong>CONSEQUÊNCIA:</strong> {item.consequencia}
                                                                        </p>
                                                                        <br/> <br/>
                                                                    </div>
                                                                    <div className="col-md-4">
                                                                        <br/>
                                                                        <div className={bgColor}>
                                                                            <div className="container-fluid">
                                                                                <div className="row">
                                                                                    <div className="col-md-12 text-center">
                                                                                        <br/>
                                                                                        <h2 style={{fontSize: '22px', lineHeight: '30px'}}><strong>{item.risco}</strong></h2>
                                                                                        {/*<h2 style={{fontSize: '40px', lineHeight: '50px'}}>{item.pontos}</h2>
                                                                                        <p>pontos</p>*/}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-12 text-right" style={{textAlign: 'right'}}>
                                                                    <br/>
                                                                    <p onClick={() => ClickRecurso(key)} className="cursor" style={{fontSize: '20px'}}>Indicações de {item.recursos.length} recursos para intervenção <i className="fas fa-angle-right"/></p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-md-12">
                                                            <hr/>
                                                        </div>


                                                        <div className="col-md-12" style={{display: groupRecurso===key ? '' : 'none'}}>
                                                            <h2>Recursos</h2>
                                                            <hr/>
                                                            <div>
                                                                <Item propsData={item.recursos}  grupo={item.numero}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })
                                        : null
                                }

                            </div>
                        </div>
                    </>
                )
            }


        </div>

    );
};
