import React, { Component } from 'react';

class PageFour extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div>
                    <h1>Page Four</h1>
                    <p>
                        Param id: {this.props.match.params.id}<br/>
                        Param action: {this.props.match.params.action}
                    </p>
                </div>
            </div>
        );
    }

}

export default PageFour;
