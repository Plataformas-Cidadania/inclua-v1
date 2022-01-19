const Page = () => {

    const {useState, useEffect} = React;

    useEffect(() => {
        Resultado();
    }, []);

    const Resultado = async () => {
        try {
            const result = await axios.get("api/dimensao");
            setResultado(result.data)
            console.log('***', result.data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div>
                <h1 style={{fontFamily: "sora", float: "left", margin: 0}}>INCLUA</h1>
                <img src="img/logo-ipea.png" width="150" style={{float: "right"}}/>
                    <div style={{clear: "both", margin: "15px 0"}}>
                        <hr/>
                    </div>
            </div>


            <div style={{fontFamily: "Verdana", fontSize: "16px", lineHeight: "25px", width: "800px", margin: "auto"}}>

                <div>
                    <img src="img/dimensao1.png" width="80" style={{float: "left", marginRight: "15px"}}/>
                        <h2 style={{margin: "0"}}>DIMENSÃO 1</h2>
                        <p style={{margin: "0"}}><strong>Relações interinstitucionais e instrumentos de gestão
                            inclusivainclusiva</strong></p>
                        <p style={{margin: "0"}}>Veja abaixo os resultados por indicador:</p>
                </div>


                <div style={{float: "both"}}>
                    <h2 style={{float: "left"}}>Risco alto</h2>
                    <h2 style={{float: "right"}}>0 pontos</h2>
                    <div style={{float: "both"}}/>
                </div>

                <hr/>


                    <p><strong>Indicador 1 - DIVISÃO DO TRABALHO, COORDENAÇÃO E CONFLITO INTERINSTITUCIONAL</strong></p>

                    <div>
                        <p style={{float: "left"}}>Risco alto</p>
                        <p style={{float: "right"}}>0 pontos</p>
                        <div style={{float: "both"}}/>
                    </div>

                    <p><b>CONSEQUÊNCIA:</b> Identifica e avalia o grau de maturidade da articulação institucional,
                        atenção a conflitos e disputas interorganizacionais, falhas de conexão, lacunas derivadas da
                        divisão do trabalho entre as organizações e esforços de reorganização do arranjo institucional.
                    </p>

                    <table className="table" width="100%" style={{fontSize: "13px"}}>
                        <thead>
                        <tr style={{textAlign: "left"}}>
                            <th style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>Cod</th>
                            <th style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>Título</th>
                            <th style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>Esfera</th>
                            <th style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>Tipo</th>
                        </tr>
                        </thead>
                        <tbody>


                        <tr>
                            <th style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>1</th>
                            <td style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>
                                Guia para Implementação das Prioridades Transversais na OPAS/OMS do Brasil: direitos
                                humanos, equidade, gênero e etnicidade e raça
                                <br/>
                                    <strong>
                                        Idiomas:
                                        <a href="" target="_blank">Inglês</a> -
                                        <a href="" target="_blank">Alemão</a>
                                    </strong>
                                    <br/>
                                    <strong>Autoria: Ricardo Lima</strong>
                            </td>
                            <td style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>Brasil</td>
                            <td style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>Artigo</td>
                        </tr>


                        </tbody>
                    </table>

            </div>

        </>

    );
};
