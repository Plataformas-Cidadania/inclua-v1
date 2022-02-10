const Option = (props) => {

    const {useState, useEffect} = React;

    const [form, setForm] = useState({
        descricao: '',
        id_pergunta: props.id_pergunta,
        id_user: props.id_user,
        status: 0,
    });

    const [validar, setValidar] = useState(false);


    const [notify, setNotify] = useState({type:null, text:null, spin:false});

    const handleNotify = (notify) =>{
        setNotify(notify);
    }


    const Inserir = async (descri) => {

        //Limpar form
        let newForm = {
            ...form,
            descricao: descri,
        }
        setForm(newForm);
        ////

        handleNotify({type: null, text: null, spin: true});
        try {
            const result = await axios.post('api/resposta_relate', form);

            handleNotify({type: 'success', text: 'Resposta inserida com sucesso!', spin: false});

            //Limpar form
            let newForm = {
                ...form,
                descricao: "",
            }
            setForm(newForm);
            ////


        } catch (error) {
            console.log(error);
            handleNotify({type: 'danger', text: 'Resposta não foi inserido, tente novamente!', spin: false});
        }
    }

    const handleForm = (event) => {
        let { value, id } = event.target;
        let newForm = {
            ...form,
            [id]: value
        }
        setForm(newForm);

    }


    return (
        <div className="row">

            <Detalhar
                id_pergunta={props.id_pergunta}
                setProps={setValidar}

            />


            <div style={{fontSize: '20px'}}  onClick={() => Inserir(props.descricao)} className="cursor">
                <i className="far fa-circle" />
            </div>
            <div style={{fontSize: '20px'}}  onClick={() => Inserir(props.descricao)} className="cursor">
                <i className="fas fa-circle" />
            </div>




            <div className="col-md-12" style={{display: validar ? 'none' : ''}}>
                <br/>
                <div className={"alert alert-"+notify.type+" d-flex align-items-center"} role="alert" style={{display: notify.type ? '' : 'none'}}>
                    <span style={{display: notify.type ? '' : 'none'}}><i className="fas fa-exclamation-triangle bi flex-shrink-0 me-2" /></span>
                    <div>{notify.text}</div>
                </div>
            </div>

        </div>
    );
};
