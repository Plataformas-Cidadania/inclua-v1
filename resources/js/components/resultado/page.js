const Page = () => {

    const {useState, useEffect} = React;
    const [resultadoMap, setResultadoMap] = useState([]);

    useEffect(() => {
        Resultado();
    }, []);

    const Resultado = async () => {
        try {
            const result = await axios.get('api/resultado');
            console.log(result.data.data);
            setResultadoMap(result.data.data)
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
    bgColor = bgColor[1];

    return (
        <div>

            <div className="row">
                <div className="col-md-12">
                    <div className={bgColor}>
                        <div className="row">
                            <div className="col-md-2 text-center">
                                <img src={"img/dimensao"+1+"-g.png"} alt="" width="100"/>
                                <h2>DIMENSÃO </h2>
                            </div>
                            <div className="col-md-8">
                                <h2 className="mt-5">Relações interinstitucionais e instrumentos de gestão inclusiva</h2>
                                <p className="mb-5">Veja abaixo os resultados por indicador:</p>
                            </div>
                            <div className="col-md-2 text-center">
                                <br/>
                                <p><strong>Risco Alto</strong></p>
                                <h2 style={{fontSize: '40px'}}>21</h2>
                                <p>pontos</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <br/>
                        <h2>Indicador 1.1 - DIVISÃO DO TRABALHO, COORDENAÇÃO E CONFLITO INTERINSTITUCIONAL</h2>

                        <div className="row">
                            <div className="col-md-6">
                                <BarChart id={'pie-chart'} series={[10, 20, 30, 80, 70, 60, 50, 40]} labels={[10, 20, 30, 80, 70, 60, 50, 40]}/>
                            </div>
                            <div className="col-md-6">
                                <div className="text-right">

                                    <div className="row">
                                        <div className="col-md-8">
                                            <br/>
                                            <p><strong>CONSEQUÊNCIA:</strong> Desarticulações (ou formas específicas de articulação) e disputas interinstitucionais podem repercutir em déficits de cobertura, lacunas de atenção ou repercussões negativas para o atendimento a segmentos específicos do público ou territórios atendidos</p>
                                            <br/> <br/>
                                        </div>
                                        <div className="col-md-4">
                                            <br/>
                                            <div className={bgColor}>
                                                <div className="container-fluid">
                                                    <div className="row">
                                                        <div className="col-md-12 text-center">
                                                            <br/>
                                                            <p><strong>Risco Alto</strong></p>
                                                            <h2 style={{fontSize: '40px'}}>21</h2>
                                                            <p>pontos</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    Indicações de Recursos para intervenção
                                    <i className="fas fa-chevron-right"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    );
};

