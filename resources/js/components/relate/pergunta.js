const Pergunta = () => {

    const {useState, useEffect} = React;
    const [relateMap, setRelateMap] = useState([]);
    const [relate, setRelate] = useState(0);

    useEffect(() => {
        Relate();
    }, []);

    //console.log('relate', relate);

    const ClickRelate = (id, key) => {

        console.log(id, key);
        setRelate(id, key);
    }

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
                                        <div className="col-md-2 text-center cursor" onClick={() => ClickRelate(item.id, 1)}>
                                            <i className="far fa-tired fa-3x"/><br/>
                                            <p>Detestei</p>
                                        </div>
                                        <div className="col-md-2 text-center cursor" onClick={() => ClickRelate(item.id, 2)}>
                                            <i className="far fa-frown fa-3x"/><br/>
                                            <p>Não gostei</p>
                                        </div>
                                        <div className="col-md-2 text-center cursor" onClick={() => ClickRelate(item.id, 3)}>
                                            <i className="far fa-meh fa-3x"/><br/>
                                            <p>Indiferente</p>
                                        </div>
                                        <div className="col-md-2 text-center cursor" onClick={() => ClickRelate(item.id, 4)}>
                                            <i className="far fa-smile fa-3x"/><br/>
                                            <p>Gostei</p>
                                        </div>
                                        <div className="col-md-2 text-center cursor" onClick={() => ClickRelate(item.id, 5)}>
                                            <i className="far fa-grin-hearts fa-3x"/><br/>
                                            <p>Adorei</p>
                                        </div>

                                        <textarea id="story" name="story" rows="5" cols="33" placeholder={"Deixe um comentário"} style={{display: item.id === relate ? '' : 'none'}}  />

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
