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


