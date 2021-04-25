import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';

class Navbar extends Component {
    render () {

        const { authedUser } = this.props
        return (
            <div class="nav-bar">
                <div class="title">
                    Would You Rather
                </div>

                <div class="right-portion">
                    <NavLink to="/leaderboard" exact className="link" activeClassName="link-active">
                        Leaderboard
                    </NavLink>

                    <NavLink to="/addQuestion" exact className="link" activeClassName="link-active">
                        Add a Question    
                    </NavLink>
                    
                    {authedUser}
                    
                    <Logout />
                </div>

            </div>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser : state.authedUser,
    }
}

export default connect (mapStateToProps) (Navbar)
