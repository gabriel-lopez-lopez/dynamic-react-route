import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PageThree extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/pageThree/add'>Page 3 / Add</Link>
                    </li>
                </ul>
                <div>
                    <h1>Page Three</h1>
                </div>
            </div>
        );
    }

}

export default PageThree;
