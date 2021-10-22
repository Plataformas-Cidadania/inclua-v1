const Home = () => {
  //const { useContext } = React;
  //const context = useContext(HomeContext);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, null));
};

ReactDOM.render( /*#__PURE__*/React.createElement(HomeProvider, null, /*#__PURE__*/React.createElement(Home, null)), document.getElementById('home'));