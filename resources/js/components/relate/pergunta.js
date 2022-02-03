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
                    return(
                        <div>
                            <div className="dorder-container"  key={key}>
                                <div className="dorder-container-mai p-4 ">
                                    <p>{key+1} - {item.descricao}</p>
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
