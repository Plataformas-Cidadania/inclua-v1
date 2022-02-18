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
