import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';

class Navbar extends Component {
    render() {

        const { authedUser, users } = this.props
        console.log("avatar is: ", users[authedUser].avatarURL);
        return (
            <Fragment>

                <div className="nav-bar">

                    <NavLink to="/" exact className="title">
                        Would You Rather
                    </NavLink>

                    <div className="right-portion">
                        <NavLink to="/leaderboard" exact className="link" activeClassName="link-active">
                            Leaderboard
                        </NavLink>

                        <NavLink to="/add" exact className="link" activeClassName="link-active">
                            Add a Question
                        </NavLink>


                        <div className="navbar-user">
                            <div className="navbar-img">
                                <img
                                    src={users[authedUser].avatarURL}
                                    alt={`${users[authedUser].name}'s`}
                                    className="navbar-img-itself"
                                />
                            </div>
                            {users[authedUser].name}
                        </div>

                        <Logout />

                    </div>
                </div>
                <hr className="horizontal-line" />
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        authedUser: state.authedUser,
        users: state.user,
    }
}

export default connect(mapStateToProps)(Navbar)
