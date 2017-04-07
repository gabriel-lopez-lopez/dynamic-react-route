import React, { Component } from 'react';

class Home extends Component {
    render () {
        return (
            <div>
                <h1>Home</h1>
                <p>Bienvenidos!!!</p>
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
            </div>
        );
    }
}

export default Home;
