const Pergunta = () => {

    const {useState, useEffect} = React;
    const [relateMap, setRelateMap] = useState([]);
    const [relate, setRelate] = useState(0);


    useEffect(() => {
        Relate();
    }, []);

    const ClickRelate = (id, key) => {
        setRelate(id, key);
    }

    const Relate = async () => {
        try {
            const result = await axios.get('api/pergunta_relate');
            setRelateMap(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div>
            {
                relateMap.map((item, key) => {

                    const descricao = item.descricao

                    return(
                        <div key={'pergunta'+item.id_pergunta}>

                            <div className="dorder-container">
                                <div className="dorder-container-mai p-4 ">
                                    <div dangerouslySetInnerHTML={{__html: descricao}}/>
                                    <br/>
                                    {/*<Tipo />*/}
                                    <Insert
                                        id_pergunta={item.id_pergunta}
                                        id_user={id_user}
                                    />
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
