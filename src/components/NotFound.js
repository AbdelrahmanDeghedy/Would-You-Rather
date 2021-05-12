import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NotFound extends Component {

    handleHome = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <h1>
                    404, Not Found!
                </h1>
                <button onClick={this.handleHome} className="btn"> Go Home </button>
            </div>
        )
    }
}

export default withRouter(NotFound);