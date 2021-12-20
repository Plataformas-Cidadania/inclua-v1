const Pergunta = () => {

    const {useState, useEffect} = React;
    const [relateMap, setRelateMap] = useState([]);

    useEffect(() => {
        Relate();
    }, []);

    const Relate = async () => {
        try {
            const result = await axios.get('json/relate.json');
            setRelateMap(result.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
                relateMap.map((item, key) => {
                    return(
                        <div>
                            <div className="dorder-container"  key={key}>
                                <div className="dorder-container-mai p-4 ">
                                    <p>{key+1} - {item.descricao}</p>
                                    <br/>
                                    <div className="row">
                                        <div className="col-md-1 text-center">&nbsp;</div>
                                        <div className="col-md-2 text-center">
                                            <i className="far fa-tired fa-3x"/><br/>
                                            <p>Detestei</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <i className="far fa-frown fa-3x"/><br/>
                                            <p>Não gostei</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <i className="far fa-meh fa-3x"/><br/>
                                            <p>Indiferente</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <i className="far fa-smile fa-3x"/><br/>
                                            <p>Gostei</p>
                                        </div>
                                        <div className="col-md-2 text-center">
                                            <i className="far fa-grin-hearts fa-3x"/><br/>
                                            <p>Adorei</p>
                                        </div>

                                        <textarea id="story" name="story" rows="5" cols="33">
                                        Deixe um comentário
                                        </textarea>

                                    </div>
                                </div>
                            </div>
                            <br/>
                        </div>

                    );
                })
            }
        </div>
    );
};
