import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Leaderboard extends Component {
    state = {
        userScore : [],
    }
    async componentDidMount () {
        const { users } = this.props;
        const score = [];
        Object.keys (users).map ((uid) => score.push ( [users[uid].questions.length + Object.keys (users[uid].answers).length, uid] ));
        score.sort ().reverse ();
        return await this.setState ({userScore : score})
    }
    render () {
        const { userScore } = this.state; 
        const { users } = this.props;
        console.log(userScore);
        return (
            <Fragment>
                <Navbar />
                {
                    userScore.map ((el, index) => {
                        return (
                        <div className="leaderboard-card" key={el[1]}> 
                            <div className="leaderboard-card-number"> {index + 1} </div>
                            <div> Name: {users[el[1]].name} </div>
                            <div> Question Asked: {users[el[1]].questions.length}</div>
                            <div> Question Answered: {Object.keys (users[el[1]].answers).length}</div>
                        </div>
                    )})
                }

            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        users : state.user,
    }
}

export default connect (mapStateToProps) (Leaderboard);
