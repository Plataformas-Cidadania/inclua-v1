const Home = () => {
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
