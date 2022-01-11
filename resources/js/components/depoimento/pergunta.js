const Pergunta = () => {
    const {useState} = React;
    const [icon, setIcon] = useState(0);
    const [varValid, setValid] = useState(false);
    const [form, setForm] = useState({
        icon: 0,
        comentario: '',
    });

    const ClickIcon = (id) => {
        setIcon(id);

        setTipoSelected(id);
        let newForm = {
            ...form,
            icon: id
        }
        setForm(newForm);
        validate(newForm);
    }



    const [requireds, setRequireds] = useState({
        icon: true,
        comentario: true,
    });

    const handleForm = (event) => {
        console.log('event', event);
        let { value, id } = event.target;
        let newForm = {
            ...form,
            [id]: value
        }
        setForm(newForm);
        validate(newForm);
    }

    const validate = (form) => {

        let valid = true;
        let newRequireds = requireds;

        for(let index in requireds){
            if(!form[index] || form[index]===''){
                requireds[index] = false;
                valid = false;
            }else{
                requireds[index] = true;
            }
        }

        setRequireds(newRequireds);

        setValid(valid);
        return valid;
    }

    return (
        <form>
            <input type="hidden" name="_token" value="{{ csrf_token() }}"/>
            <div className="dorder-container">
                <div className="dorder-container-mai p-4 ">

                    <div className="row">
                        <p>Avatar</p>
                        <img src="img/d1.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 1 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(1)}/>
                        <img src="img/d2.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 2 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(2)}/>
                        <img src="img/d3.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 3 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(3)}/>
                        <img src="img/d4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 4 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(4)}/>
                        <img src="img/d5.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 5 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(5)}/>
                        <img src="img/d6.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 6 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(6)}/>
                        <img src="img/d7.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 7 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(7)}/>
                        <img src="img/d8.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 8 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(8)}/>
                        <img src="img/d9.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 9 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(9)}/>
                        <img src="img/d10.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (icon === 10 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(10)}/>
                        <br/><br/>

                        <textarea id="comentario" name="esfera" rows="5" cols="33" placeholder={"Deixe um comentário"}   className="mt-2" onChange={handleForm} value={form.comentario}/>

                        <div className="dorder-container justify-content-end mt-2" >
                            <button className="btn btn-theme bg-pri "
                                    type="button">Enviar <i className="fas fa-angle-right"/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <br/>
        </form>
    );
};
