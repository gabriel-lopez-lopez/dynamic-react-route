'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var history = (0, _createBrowserHistory2.default)();

// Módulo Enrutador Final
var DynamicReactRouter = function DynamicReactRouter(props) {

    /**
     * Excepciones
     * @param {message} message Mensaje con la excepción
     */
    function ExceptionDynamicRouter(message) {
        this.error = 'DynamicReactRouter';
        this.message = message;
    }

    // Componente Layout pasado como props
    var _layout = props.layout;

    // Componente Layout que se renderiza
    var Layout = function Layout(props) {
        if (_layout !== undefined) {
            return _layout(props);
        } else {
            return _react2.default.createElement(
                'div',
                null,
                props.children
            );
        }
    };

    // Función booleana de autenticación.
    // Si no se recibe la prop, y en el caso de existir rutas que requieran de autenticación,
    // el resultado de dicha autenticación para estas rutas será verdadero
    var isAuth = props.isAuth !== undefined ? props.isAuth : function () {
        return true;
    };
    // Si la prop recibida no es una función será omitida
    if (isAuth && typeof isAuth !== 'function') {
        console.warn(new ExceptionDynamicRouter('No es una función booleana la prop \'isAuth\' especificada en la configuración del enrutador. Será omitida.'));
        isAuth = function isAuth() {
            return true;
        };
    }

    // Devuelve un Componente Router (Enrutador) que además lleva la lógica para saber si se está autenticado
    // En caso contrario redirige a la ruta del Login
    var RouteAuthComponent = function RouteAuthComponent(r, k) {
        return _react2.default.createElement(_reactRouter.Route, { exact: r.pathExact, key: k, path: r.path, render: function render(props) {
                return isAuth() ? (0, _react.createElement)(r.component, props) : _react2.default.createElement(_reactRouter.Redirect, { to: { pathname: '/login', state: { from: props.location } } });
            } });
    };

    // Devuelve un Componente Router (Enrutador)
    var RouteComponent = function RouteComponent(r, k) {
        return _react2.default.createElement(_reactRouter.Route, { exact: r.pathExact, key: k, path: r.path, component: r.component });
    };

    // Itera por los sub-enrutadores
    var recursiveRoutes = function recursiveRoutes(_routes) {

        var subRouter = _routes.map(function (route, i) {
            i += 1;
            route.n = i;
            return RouteComponent(route, i);
        });

        return _react2.default.createElement(
            'div',
            null,
            subRouter
        );
    };

    try {

        // Configuración del Router pasado como props
        var ROUTES_CONFIG = props.config;

        if (ROUTES_CONFIG === undefined) {
            throw new ExceptionDynamicRouter('No se especificó la prop \'config\' con la configuración del enrutador');
        }

        // Devuelve todos los Componente Router (Enrutador)
        var RouteComponents = ROUTES_CONFIG.map(function (route, i) {
            i += 1; // por no empezar con el cero
            route.n = i; // Será la key para los distintos enrutadores a medida que se itera y además haya recursividad

            // Si el enrutador principal tiene sub-enrutadores
            if (route.routes) {

                // Sub-enrutadores del enrutador principal
                var subRoutes = recursiveRoutes(route.routes);

                // Grupo con el enrutador principal y los sub-enrutadores del principal
                var group = _react2.default.createElement(
                    'div',
                    null,
                    RouteComponent(route, i),
                    subRoutes.props.children
                );
                // Switch sólo permite como nodos el componente Router o Redirect
                // Se retorna por lo tanto los nodos hijos de las props
                return group.props.children;
            } else {
                if (route.auth) {
                    // Es un enrutadr que requiere que se esté autenticado para llegar a la ruta
                    return RouteAuthComponent(route, i);
                }
                return RouteComponent(route, i);
            }
        });

        var InterfaceRouterComponent = _react2.default.createElement(
            'div',
            null,
            RouteComponents
        );

        return _react2.default.createElement(
            _reactRouter.Router,
            { history: history },
            _react2.default.createElement(
                Layout,
                null,
                _react2.default.createElement(
                    _reactRouter.Switch,
                    null,
                    InterfaceRouterComponent.props.children
                )
            )
        );
    } catch (err) {
        console.warn(err);
        return null;
    }
};

exports.default = DynamicReactRouter;