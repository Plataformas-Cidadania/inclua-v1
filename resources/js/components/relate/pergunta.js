const Pergunta = (props) => {

    const {useState, useEffect} = React;
    const [perguntas, setPerguntas] = useState([]);
    const [relate, setRelate] = useState(0);


    useEffect(() => {
        ListPerguntas();
    }, []);

    const ClickRelate = (id, key) => {
        setRelate(id, key);
    }

    const ListPerguntas = async () => {
        try {
            //const result = await axios.get('api/pergunta_relate/'+props.id_tipo);
            const result = await axios.get('api/pergunta_relate');
            setPerguntas(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
                perguntas.map((item, key) => {
                    return(
                        <div key={'pergunta'+item.id_pergunta}>
                            <p>{key+1} - {item.descricao}</p>

                            {/*<Option
                                id_pergunta={item.id_pergunta}
                                id_user={id_user}
                                descricao={item.descricao}
                                style={{display: props.id_tipo === 4 ? 'none' : ''}}
                            />*/}
                            <Insert
                                id_pergunta={item.id_pergunta}
                                id_user={id_user}
                                style={{display: props.id_tipo === 4 ? '' : 'none'}}
                            />
                            <br/>
                        </div>

                    );
                })
            }
        </div>
    );
};
