const Pergunta = () => {

    const {useState, useEffect} = React;
    const [forumMap, setForumMap] = useState([]);

    useEffect(() => {
        Forum();
    }, []);

    const Forum = async () => {
        try {
            const result = await axios.get('json/forum.json');
            setForumMap(result.data.itens)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {

                forumMap.map((item, key) => {
                    return(
                        <div className="col-md-12" key={key}>
                            <br/><br/>
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="text-center">
                                        <div className="row">
                                            <div className="col-4 col-md-12">
                                                <p>{item.votos}<br/>votos</p>
                                                <hr/>
                                            </div>
                                            <div className="col-4 col-md-12">
                                                <p>{item.respostas}<br/>resp.</p>
                                                <hr/>
                                            </div>
                                            <div className="col-4 col-md-12">
                                                <p>{item.visualizacoes}<br/>views</p>
                                                <hr/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className="dorder-container" style={{minHeight: "225px"}}>
                                        <div className="m-3">
                                            <a href="interaja-detalhar">
                                                <h2>{item.pergunta}</h2>
                                                <p>{item.descricao}</p>
                                                <h5 className="float-end">criado 46 segundos atrás</h5>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <hr/>
                                </div>
                            </div>
                        </div>

                    );
                })
            }
        </div>
    );
};
