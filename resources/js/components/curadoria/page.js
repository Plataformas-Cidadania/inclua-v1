const Page = () => {

    const {useState, useEffect} = React;
    const [curadorias, setCuradorias] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(0);
    const [searchBox, setSearchBox] = useState(false);


    useEffect(() => {
        Curadoria();
    }, [page]);

    const Curadoria = async () => {
        try {
            const result = await axios.get('api/curador', {

            });
            setCuradorias(result.data.data);
            setTotal(result.data.total)
        } catch (error) {
            console.log(error);
        }
    }



    const clickSearchBox = () => {
        setSearchBox(false);
    }


    return (
        <div className="row">
            <div className="rol-md-12">
                <div className="row">
                    <div className="col-md-12">
                        <p style={{textAlign: 'right'}}>{total} curadorias</p>
                        {
                            curadorias.map((item, key) => {
                                return (
                                    <div>
                                        <h2>O diagnóstico visa identificar e avaliar riscos de desatenção</h2>
                                        <p>O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.</p>
                                        <div className="row">
                                            <div className="col-md-3">
                                                <img src="https://www.influx.com.br/wp-content/uploads/2014/12/business-623x510.jpg" alt="" width="90%"/>
                                            </div>
                                            <div className="col-md-9">
                                                <h2>Fernando lima</h2>
                                                <p>O diagnóstico visa identificar e avaliar riscos de desatenção, tratamento inadequado e exclusão de segmentos específicos do público atendido. Muitas vezes, esses riscos não são suficientemente bem conhecidos.</p>
                                            </div>

                                        </div>
                                        <br/><hr/><br/>

                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};
