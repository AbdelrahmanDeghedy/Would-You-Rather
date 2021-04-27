import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { unsetAuthedUser } from '../actions/authedUser';

class Logout extends Component {
    
    handleLogout = () => {
        this.props.dispatch (unsetAuthedUser ());
    }
    
    render () {
        return (
            <Fragment>
                <Link to="/" onClick={this.handleLogout} className="link">
                    Logout
                </Link>
            </Fragment>
        )
    }
}

export default withRouter (connect () (Logout));