const Page = () => {

    const {useState, useEffect} = React;
    const [resultado, setResultado] = useState([]);

    useEffect(() => {
        Resultado();
    }, []);

    const Resultado = async () => {
        try {
            const result = await axios.get("api/diagnostico/"+localStorage.getItem('id_diagnostico_completo'));
            setResultado(result.data)
            window.print();
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
                <a onClick={() => window.print()} style={{float: 'right', cursor: 'pointer'}} className="no-print">
                    <img src="/img/print.png" alt=""/>
                </a>
            </div>

            {
                resultado.map((item, key) => {
                    return (
                        <div style={{fontFamily: "Verdana", fontSize: "16px", lineHeight: "25px", width: "800px", margin: "auto"}} key={"resultado"+item.id_recurso}>

                            <br/><br/>

                            <div>
                                <img src={"img/dimensao" + item.id_dimensao + ".png"} width="80" style={{float: "left", marginRight: "15px"}}/>
                                <h2 style={{margin: "0"}}>DIMENSÃO {item.id_dimensao}</h2>
                                <p style={{margin: "0"}}><strong>{item.titulo}</strong></p>
                                <p style={{margin: "0"}}>Veja abaixo os resultados por indicador:</p>
                            </div>
                            <div style={{clear: "both", margin: "15px 0"}}>
                                <div style={{float: "both"}}>
                                    <h2 style={{float: "left"}}>{item.risco}</h2>
                                    <h2 style={{float: "right"}}>{item.pontos} pontos</h2>
                                    <div style={{float: "both"}}/>
                                </div>
                            </div>
                            <div style={{clear: "both", margin: "15px 0"}}><hr/></div>


                            {
                                item.indicadores !== undefined ?
                                    item.indicadores.map((indicador, key) => {
                                        return (
                                            <div key={"indicadores"+indicador.id_recurso}>
                                                <p><strong>Indicador {indicador.numero} - {indicador.titulo}</strong></p>

                                                <div>
                                                    <p style={{float: "left"}}>{indicador.risco}</p>
                                                    <p style={{float: "right"}}>{indicador.pontos} pontos</p>
                                                    <div style={{float: "both"}}/>
                                                </div>
                                                <div style={{clear: "both", margin: "15px 0"}}>
                                                    <p><b>CONSEQUÊNCIA: </b>
                                                        {indicador.consequencia}
                                                    </p>
                                                </div>



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


                                                    {
                                                        indicador.recursos !== undefined ?
                                                            indicador.recursos.map((recurso, key) => {
                                                                return (
                                                                    <tr key={"recurso"+recurso.id_recurso}>
                                                                        <th style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>{recurso.id_recurso}</th>
                                                                        <td style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>
                                                                            {recurso.nome}
                                                                            <br/>
                                                                            <strong>
                                                                                Idiomas:&nbsp;

                                                                                {
                                                                                    recurso.links !== undefined ?
                                                                                        recurso.links.map((link, key) => {
                                                                                            return (
                                                                                                <a href={link.uri} target="_blank" key={"link"+link.id_link}>
                                                                                                    {link.idioma}
                                                                                                    {recurso.links.length !== key+1 ? ' - ' : ''}
                                                                                                </a>
                                                                                            );
                                                                                        })
                                                                                        : null
                                                                                }

                                                                            </strong>
                                                                            <br/>
                                                                            <strong>
                                                                                Autoria:&nbsp;


                                                                                {
                                                                                    recurso.autoria !== undefined ? recurso.autoria.map((autoria, key) => {
                                                                                        return (
                                                                                            <span key={"autoria"+key}>
                                                                                                {autoria.autor.nome}
                                                                                                {item.autoria.length !== key+1 ? ', ' : ''}
                                                                                            </span>
                                                                                        );
                                                                                    }) : null
                                                                                }
                                                                            </strong>
                                                                        </td>
                                                                        <td style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>{recurso.esfera}</td>
                                                                        <td style={{borderBottom: "solid 1px #CCCCCC", padding: "5px"}}>{recurso.tipo_recurso.nome}</td>
                                                                    </tr>
                                                                );
                                                            })
                                                            : null
                                                    }



                                                    </tbody>
                                                </table>
                                            </div>
                                        );
                                    })
                                    : null
                            }


                         <div style={{pageBreakAfter: "always"}}/>


                        </div>
                    );
                })
            }


        </>

    );
};
