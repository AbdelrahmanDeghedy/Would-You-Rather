import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';

class Navbar extends Component {
    render () {
        
        const { authedUser, users } = this.props
        console.log("avatar is: ", users[authedUser].avatarURL);
        return (
            <div className="nav-bar">

                    <NavLink to="/Would-You-Rather" exact className="title">
                        Would You Rather
                    </NavLink>

                <div className="right-portion">
                    <NavLink to="/leaderboard" exact className="link" activeClassName="link-active">
                        Leaderboard
                    </NavLink>

                    <NavLink to="/add" exact className="link" activeClassName="link-active">
                        Add a Question    
                    </NavLink>
                    
                    <div className="img-container navbar-img">
                        <img 
                            src={users[authedUser].avatarURL}
                            alt={`${users[authedUser].name}'s Image`}
                            className="img"
                        />
                    </div>
                    
                    {users[authedUser].name}
                    
                    <Logout />

                </div>
            
                <hr className="horizontal-line"/>

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
