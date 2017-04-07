# dynamic-react-router
Módulo para la creación dinámica de enrutadores basados en la versión 4.0.0 de [react-router](https://www.npmjs.com/package/react-router) a partir de un objeto o archivo de configuración (.js)

## Instalación

```sh
    $ npm install --save dynamic-react-router
```

## Ejemplo de uso
Código competo en el directorio [dynamic-react-route demo](https://github.com/gabriel-lopez-lopez/dynamic-react-route/tree/master/dynamic-react-router%20demo)

**route.js**

```sh
import NotFound from './Components/404';
import Home from './Components/Home';
import PageOne from './Components/Pages/pageOne';
import PageTwo from './Components/Pages/pageTwo';
import PageThree from './Components/Pages/pageThree';
import PageThreeAdd from './Components/Pages/pageThreeAdd';
import PageFour from './Components/Pages/pageFour';
// Configuración del Router
export const ROUTES_CONFIG = [
    // ROOT
    {
        path: '/',
        pathExact: true,
        component: Home
    },
    // PAGE 1
    {
        path: '/pageOne',
        pathExact: true,
        component: PageOne
    },
    // PAGE 2
    {
        path: '/pageTwo',
        pathExact: true,
        component: PageTwo
    },
    // PAGE 3
    {
        path: '/pageThree',
        pathExact: true,
        auth: true,
        component: PageThree,
        routes: [
            // PAGE 3/ADD
            {
                path: '/pageThree/add',
                pathExact: true,
                auth: true,
                component: PageThreeAdd
            },
            // PAGE 4
            {
                path: '/pageFour/:id/:action',
                auth: true,
                component: PageFour
            }
        ]
    },
    // NOT FOUND
    {
        component: NotFound
    }
];
```

**app.js**

```sh
import React, { Component } from 'react';
import Layout from '../Layout';
import DynamicReactRouter from 'dynamic-react-router';
// Configuración del Enrutador
import { ROUTES_CONFIG } from '../../route';
class App extends Component {
    constructor(props) {
        super(props);
    }
    // Funcioón booleana para las rutas del enrutador que requieren de autenticación
    isAuth() {
        if (store.get('jwt')) {
            return true;
        }
        return false;
    }
    render() {
        return (
            <DynamicReactRouter config={ROUTES_CONFIG} layout={Layout} isAuth={this.isAuth} />
        );
    }
}
export default App;
```

**index.js**
 
```sh
import React from 'react';
import { render } from 'react-dom';
import App from './Components/App';
import styles from './css/styles.css';
render(<App />, document.getElementById('app'));
```
