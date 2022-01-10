const Pergunta = () => {
    const {useState} = React;
    const [relate, setRelate] = useState(0);

    const ClickIcon = (id) => {


        setRelate(id);
    }

    return (
        <div>
            <div className="dorder-container">
                <div className="dorder-container-mai p-4 ">

                    <div className="row">
                        <p>Avatar</p>
                        <img src="img/p4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 1 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(1)}/>
                        <img src="img/p4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 2 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(2)}/>
                        <img src="img/p4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 3 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(3)}/>
                        <img src="img/p4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 4 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(4)}/>
                        <img src="img/p4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 5 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(5)}/>
                        <img src="img/p4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 6 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(6)}/>

                        <br/><br/>
                        <textarea id="story" name="story" rows="5" cols="33" placeholder={"Deixe um comentário"}   className="mt-2"/>

                        <div className="dorder-container justify-content-end mt-2" >
                            <button className="btn btn-theme bg-pri "
                                    type="button">Enviar <i className="fas fa-angle-right"/>
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            <br/>
        </div>
    );
};
