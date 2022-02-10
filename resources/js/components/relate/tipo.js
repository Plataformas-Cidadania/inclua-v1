const Tipo = () => {

    const {useState, useEffect} = React;
    const [tipoPergunta, setTipoPergunta] = useState([]);

    useEffect(() => {
        Tipos();
    }, []);

    const Tipos = async () => {
        try {
            const result = await axios.get('api/tipo_pergunta_relate');
            setTipoPergunta(result.data.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {
                tipoPergunta.map((item, key) => {
                    return(
                        <div key={'pergunta'+item.id_tipo}>
                            <div className="dorder-container">
                                <div className="dorder-container-mai p-4 ">
                                    <p><strong>{key+1} - {item.descricao}</strong></p>
                                    <Pergunta id_tipo={item.id_tipo}/>
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

