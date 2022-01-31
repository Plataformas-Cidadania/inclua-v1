

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
        console.log('aaa');
        try {
            const result = await axios.get('api/pergunta_relate');
            setRelateMap(result.data.data)

            console.log(result.data.data)

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

                                    <Insert
                                        id_pergunta={item.id_pergunta}
                                        id_user={2}
                                    />
                                        {/*<textarea id="story" name="story" rows="5" cols="33" placeholder={"Deixe um comentário"}  />

                                        <div className="col-md-12">
                                            <div className="dorder-container justify-content-end">
                                                <button className="btn btn-theme bg-pri float-end"
                                                        type="button">Enviar <i className="fas fa-angle-right"/>
                                                </button>
                                            </div>
                                        </div>*/}


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
