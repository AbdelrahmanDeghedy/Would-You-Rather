import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import Button from './Button';

class Login extends Component {
    state = {
        selectedUser: "",
    }

    // Controlled Component
    handleChangeSelection = (e) => {
        e.preventDefault();
        this.setState({ selectedUser: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.selectedUser === "") {
            alert('Please login with a valid user!');
            return;
        }
        this.props.dispatch(setAuthedUser(this.state.selectedUser))
    }


    // test = () => {
    //     alert("TEST")
    // }

    render() {
        const { users } = this.props;
        return (
            <div className="login-container">
                <h3 className="login-header">Who Are You?</h3>
                <form>
                    <select defaultValue="" onChange={this.handleChangeSelection} className="login-selector">
                        <optgroup>
                            <option value="" disabled> Select a User </option>
                            {
                                Object.keys(users).map((uid) =>
                                    <option key={uid} value={uid}> {uid} </option>
                                )
                            }
                        </optgroup>
                    </select>

                </form>
                <Button content="Submit" handler={this.handleSubmit} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.user,
    }
}

export default connect(mapStateToProps)(Login);