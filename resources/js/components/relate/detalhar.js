const Detalhar = (props) => {

    const {useState, useEffect} = React;
    const [detalhar, setDetalhar] = useState([]);



    useEffect(() => {
        Detail();
    }, [props]);


    const Detail = async () => {
        try {
            const result = await axios.get('api/resposta_relate/perguntaRelate/'+props.id_pergunta+'/user/'+id_user);
            setDetalhar(result.data.data);

            if(result.data.data.length > 0){
                props.setProps(true);
            }

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <p>
            <strong>Resposta: </strong>
            { detalhar.length > 0 ? detalhar[0].descricao : ''}
        </p>
    );
};

