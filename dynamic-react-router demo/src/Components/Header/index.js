import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <nav>
                <ul>
                    <li>
                        <h3>dynamic-react-router</h3>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/pageOne'>Page 1</Link>
                    </li>
                    <li>
                        <Link to='/pageTwo'>Page 2</Link>
                    </li>
                    <li>
                        <Link to='/pageThree'>Page 3</Link>
                    </li>
                    <li>
                        <Link to='/pageFour/1010/edit'>Page 4 / id / action</Link>
                    </li>
                </ul>
            </nav>
        );
    }

}

export default Header;
