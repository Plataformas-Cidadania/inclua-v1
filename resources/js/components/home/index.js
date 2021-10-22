const Home = () => {

    //const { useContext } = React;
    //const context = useContext(HomeContext);

    return (
        <div>
            <Header/>
        </div>
    );
};

ReactDOM.render(
    <HomeProvider>
        <Home />
    </HomeProvider>,
    document.getElementById('home')
);
