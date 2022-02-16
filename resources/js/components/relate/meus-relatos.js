const MeusRelatos = (props) => {

    const {useState, useEffect} = React;
    const [respostas, setRespostas] = useState([]);
    const [relates, setRelates] = useState([]);
    const [showRelate, setShowRelate] = useState(0);

    useEffect(() => {
        listRelatos();
    }, [showRelate]);

    const listRelatos = async () => {
        try {
            const result = await axios.get('api/resposta_relate/user/'+props.id_user);

            let data = result.data.data;

            let relates = [];
            let respostas = [];

            //let idRelate = data[0].id_relate;
            let idRelate = data[0].relate.id_relate;
            var dataInput = data[0].relate.created_at.slice(0, 10);
            let date = new Date(dataInput);
            dataFormatada = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});
            relates.push(
                <div key={"relate"+0}>
                    <p className="bg-lgt p-3" onClick={() => {
                        setShowRelate(showRelate === data[0].relate.id_relate ? 0 : data[0].relate.id_relate)
                    }} style={{cursor: 'pointer'}}>
                        <strong>Relato {data[0].relate.id_relate} - {dataFormatada}</strong>
                    </p>
                    <div style={{display: showRelate === data[0].relate.id_relate ? '' : 'none'}}>
                        {respostas}
                    </div>
                </div>
            );

            data.forEach((item, key) => {

                if(item.relate.id_relate !== idRelate){
                    var dataInput = item.relate.created_at.slice(0, 10);
                    let date = new Date(dataInput);
                    dataFormatada = date.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

                    respostas = []
                    relates.push(
                        <div key={"relate"+key}>
                            <p className="bg-lgt p-3" onClick={() => {
                                setShowRelate(showRelate === item.relate.id_relate ? 0 : item.relate.id_relate)
                            }} style={{cursor: 'pointer'}}>
                                <strong>Relato {item.relate.id_relate} - {dataFormatada}</strong>
                            </p>
                            <div style={{display: showRelate === item.relate.id_relate ? '' : 'none'}}>
                                {respostas}
                            </div>
                        </div>
                    );
                    idRelate = item.relate.id_relate;
                }

                respostas.push(
                    <div key={"resposta"+key}>
                        <div dangerouslySetInnerHTML={{__html: item.pergunta.descricao}}/>
                        <div>{item.descricao}</div>
                        <hr/>
                    </div>
                );

            });

            /*respostas = result.data.data.map((item, key) => {

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
            });*/


            /*setRespostas(respostas);*/
            setRelates(relates);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            {/*{respostas}*/}
            {/*<hr/><hr/><hr/><hr/>*/}
            {relates}
        </div>
    );
};

ReactDOM.render(
    <MeusRelatos id_user={id_user} />,
    document.getElementById('meus-relatos')
);
