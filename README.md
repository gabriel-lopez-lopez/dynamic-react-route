# dynamic-react-router
Módulo para la creación dinámica de enrutadores basados en la versión 4.0.0 de [react-router](https://www.npmjs.com/package/react-router) a partir de un objeto o archivo de configuración (.js)

## instalación

```sh
    $ npm install --save dynamic-react-router
```

## Ejemplo de uso:

**route.js**

```sh
import NotFound from './Components/404';
import Home from './Components/Home';
import PageOne from './Components/Pages/pageone.js';
import PageTwo from './Components/Pages/pagetwo.js';
import PageThree from './Components/Pages/pagethree.js';
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
        auth: true,
        component: PageTwo
        routes: [
            {
                path: '/pageTwo/add',
                pathExact: true,
                auth: true,
                component: PageThree
            },
            {
                path: '/pageTwo/:id/:action',
                auth: true,
                component: PageThree
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
import React, { createElement, Component } from 'react';
import Layout from '../Layout';
import DynamicReactRouter from './lib/dynamicReactRouter.js';
// Configuración del Enrutador
import { ROUTES_CONFIG } from './route';
class App extends Component {
    constructor(props) {
        super(props);
    }
    // Funcioón booleana para las rutas del enrutador que requieren de autenticación
    isAuth() {
        return true;
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
import App from './app.js';
render(<App />, document.getElementById('app'));
```

