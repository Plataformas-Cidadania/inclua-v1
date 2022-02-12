const MeusRelatos = (props) => {

    const {useState, useEffect} = React;
    const [respostas, setRespostas] = useState([]);

    useEffect(() => {
        listRelatos();
    }, []);

    const listRelatos = async () => {
        try {
            const result = await axios.get('api/resposta_relate/user/'+props.id_user);

            let idRelate = 0;

            let respostas = result.data.data.map((item, key) => {

                let showRelate = false;
                if(item.relate.id_relate !== idRelate){
                    idRelate = item.relate.id_relate;
                    showRelate = true;
                }

                var dataInput = item.relate.created_at.slice(0, 10);

                let data = new Date(dataInput);
                dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

                return (
                    <div key={"relate"+key}>
                        <p style={{display: showRelate ? '' : 'none'}} className="bg-lgt p-3" >
                            <strong>Relato {item.relate.id_relate} - {dataFormatada}</strong>
                        </p>
                        <div dangerouslySetInnerHTML={{__html: item.pergunta.descricao}}/>
                        <div>{item.descricao}</div>
                        <hr/>
                    </div>
                );
            });


            setRespostas(respostas);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {respostas}
        </div>
    );
};

ReactDOM.render(
    <MeusRelatos id_user={id_user} />,
    document.getElementById('meus-relatos')
);
