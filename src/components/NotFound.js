import React, { Component } from 'react';
import { withRouter }from 'react-router-dom';

class NotFound extends Component {
    
    handleHome = () => {
        this.props.history.push ('/');
    }
    render () {
        return (
            <div>
                <h1>
                    404, Not Found!
                </h1>
                <a onClick={this.handleHome} className="btn"> Go Home </a>
            </div>
        )
    }
}

export default withRouter (NotFound);