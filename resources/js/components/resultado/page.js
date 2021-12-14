const Page = () => {

    const {useState, useEffect} = React;
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        Resultado();
    }, []);

    const Resultado = async () => {
        try {
            const result = await axios.get('json/resultado.json');
            //const result = await axios.get('api/resultado/{id_indicador}/{id_diagnostico}');
            //setResultado(result.data.data)
            console.log('----', result.data);
            setResultado(result.data)
        } catch (error) {
            //alert('erro');
            console.log(error);
        }
    }

    let bgColor = {
        1:'bg-pri',
        2:'bg-sec',
        3:'bg-ter',
        4:'bg-qua',
        5:'bg-qui',
    };

    bgColor = bgColor[resultado.id_dimensao];

    console.log('----', resultado.indicadores);

    return (
        <div>

            <div className="row">
                <div className="col-md-12">
                    <div className={bgColor}>
                        <div className="row">
                            <div className="col-md-2 text-center">
                                <img src={"img/dimensao" + resultado.id_dimensao + "-g.png"} alt="" width="100"/>
                                <h2>DIMENSÃO {resultado.id_dimensao}</h2>
                            </div>
                            <div className="col-md-8">
                                <h2 className="mt-5">{resultado.nome}
                                    inclusiva</h2>
                                <p className="mb-5">Veja abaixo os resultados por indicador:</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <br/>
                                <p><strong>{resultado.risco}</strong></p>
                                <h2 style={{fontSize: '40px'}}>{resultado.pontos}</h2>
                                <p>pontos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    {
                        resultado.indicadores ?
                            resultado.indicadores.map((item, key) => {
                                return (
                                <div className="col-md-12" key={'indicadores_'+key}>
                                    <h2><br/><br/>Indicador 1.1 - {item.titulo}</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <BarChart id={'pie-chart'} series={[10, 20, 30, 80, 70, 60, 50, 40]}
                                                      labels={[10]}/>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="text-right">
                                                <div className="row">
                                                    <div className="col-md-8">
                                                        <br/>
                                                        <p><strong>CONSEQUÊNCIA:</strong> {item.descricao}
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
                                                                        <p><strong>{item.risco}</strong></p>
                                                                        <h2 style={{fontSize: '40px'}}>{item.pontos}</h2>
                                                                        <p>pontos</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12 text-right" style={{textAlign: 'right'}}>
                                                    <br/>
                                                    <p>Indicações de {item.recursos.length} recursos para intervenção <i className="fas fa-angle-right"/></p>
                                                </div>
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
        </div>

    );
};
