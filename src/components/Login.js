import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser, unsetAuthedUser } from '../actions/authedUser';

class Login extends Component {
    state = {
        selectedUser : "",
    }

    // Controlled Component
    handleChangeSelection = (e) => {
        e.preventDefault ();
        this.setState ({selectedUser : e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault ();
        this.props.dispatch (setAuthedUser (this.state.selectedUser))
    }

    render () {
        const { users } = this.props;
        return (
            <div>
                <h3 className="login-header">Who Are You?</h3>
                <form onSubmit={this.handleSubmit}>
                    {console.log(users)}
                    <select defaultValue="" onChange={this.handleChangeSelection} className="login-selector">
                    <option  value=""  disabled> Select a User </option>
                    {Object.keys(users).map ((uid) =>  
                        <option key={uid} value={uid}> {uid} </option>
                    )
                    }
                    </select>

                    <button className="login-btn"> Submit </button>
                </form>
            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        users : state.user,
    }
}

export default connect (mapStateToProps) (Login);