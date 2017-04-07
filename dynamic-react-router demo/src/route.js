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