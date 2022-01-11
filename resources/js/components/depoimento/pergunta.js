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
                        <img src="img/d1.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 1 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(1)}/>
                        <img src="img/d2.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 2 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(2)}/>
                        <img src="img/d3.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 3 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(3)}/>
                        <img src="img/d4.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 4 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(4)}/>
                        <img src="img/d5.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 5 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(5)}/>
                        <img src="img/d6.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 6 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(6)}/>
                        <img src="img/d7.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 7 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(7)}/>
                        <img src="img/d8.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 8 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(8)}/>
                        <img src="img/d9.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 9 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(9)}/>
                        <img src="img/d10.png" alt="" title="" width="100" className={"box-btn-icon float-start ms-4 " + (relate === 10 ? 'box-btn-icon-set' : '')} onClick={() => ClickIcon(10)}/>
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
