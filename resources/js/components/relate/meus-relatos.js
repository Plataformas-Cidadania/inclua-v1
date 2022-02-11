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

                return (
                    <div key={"relate"+key}>
                        <p style={{display: showRelate ? '' : 'none', borderBottom: 'solid 2px #333'}}>{item.relate.id_relate} - {item.relate.created_at}</p>
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
