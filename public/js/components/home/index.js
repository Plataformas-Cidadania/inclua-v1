var Home = function Home() {
    return React.createElement(
        'div',
        null,
        React.createElement(Header, null)
    );
};

ReactDOM.render(React.createElement(
    HomeProvider,
    null,
    React.createElement(Home, null)
), document.getElementById('home'));