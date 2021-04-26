import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';

class Navbar extends Component {
    render () {

        const { authedUser, users } = this.props
        return (
            <div className="nav-bar">

                    <NavLink to="/" exact className="title">
                        Would You Rather
                    </NavLink>

                <div className="right-portion">
                    <NavLink to="/leaderboard" exact className="link" activeClassName="link-active">
                        Leaderboard
                    </NavLink>

                    <NavLink to="/addQuestion" exact className="link" activeClassName="link-active">
                        Add a Question    
                    </NavLink>
                    
                    {users[authedUser].name}
                    
                    <Logout />
                </div>

            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser : state.authedUser,
        users : state.user,
    }
}

export default connect (mapStateToProps) (Navbar)
