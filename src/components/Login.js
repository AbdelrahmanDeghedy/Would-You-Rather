import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SET_AUTHED_USER, UNSET_AUTHED_USER } from '../actions/authedUser';

class Login extends Component {

    handleSetAuthedUser = () => {
        this.props.dispatch (SET_AUTHED_USER ())
    }

    render () {
        return (
            <div>
                <h3>Who Are You?</h3>
                {/* <button onClick={setAuthedUser}> Sarah Edo </button> */}
                <button> Tyler McGinnis </button>
                <button> John Doe </button>
            </div>
        )
    }
}

export default connect () (Login);