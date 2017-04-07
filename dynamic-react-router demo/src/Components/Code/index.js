import React from 'react';

const Code = () {

    return (
        <pre>{`
            {
                path: '/',
                pathExact: true,
                component: Home
            },
            {
                path: '/pageOne',
                pathExact: true,
                component: PageOne
            },
            {
                path: '/pageTwo',
                pathExact: true,
                component: PageTwo

            },
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
            // 404 NOT FOUND
            {
                component: NotFound
            }
            `}
        </pre>
    );

};

export default Code;