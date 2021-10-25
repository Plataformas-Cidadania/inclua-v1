import _regeneratorRuntime from 'babel-runtime/regenerator';

var _this = this;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var DiagnosticoContext = React.createContext({});

var DiagnosticoProvider = function DiagnosticoProvider(_ref) {
    var children = _ref.children;
    var _React = React,
        useState = _React.useState,
        useEffect = _React.useEffect;

    var _useState = useState(null),
        _useState2 = _slicedToArray(_useState, 2),
        tipo = _useState2[0],
        setTipo = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        dimensoes = _useState4[0],
        setDimensoes = _useState4[1];

    var _useState5 = useState(1),
        _useState6 = _slicedToArray(_useState5, 2),
        dimensao = _useState6[0],
        setDimensao = _useState6[1];

    var _useState7 = useState([]),
        _useState8 = _slicedToArray(_useState7, 2),
        dimensoesRespondidas = _useState8[0],
        setDimensoesRespondidas = _useState8[1];

    useEffect(function () {
        listDimensoes();
    }, []);

    var listDimensoes = function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
            var result;
            return _regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return axios.get('teste-dimensoes');

                        case 3:
                            result = _context.sent;

                            setDimensoes(result.data);
                            _context.next = 10;
                            break;

                        case 7:
                            _context.prev = 7;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 10:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 7]]);
        }));

        return function listDimensoes() {
            return _ref2.apply(this, arguments);
        };
    }();

    return React.createElement(
        DiagnosticoContext.Provider,
        { value: {
                tipo: tipo, setTipo: setTipo,
                dimensao: dimensao, setDimensao: setDimensao,
                dimensoes: dimensoes,
                dimensoesRespondidas: dimensoesRespondidas, setDimensoesRespondidas: setDimensoesRespondidas
            } },
        children
    );
};