import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';

class Logout extends Component {
    
    handleLogout = () => {
        this.props.dispatch (unsetAuthedUser ());
        this.props.history.push ('/')
    }
    
    render () {
        return (
            <Fragment>
                <a onClick={this.handleLogout} class="link">
                    Logout
                </a>
            </Fragment>
        )
    }
}

export default withRouter (connect () (Logout));