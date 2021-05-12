import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Leaderboard extends Component {
    state = {
        userScore: [],
    }
    async componentDidMount() {
        const { users } = this.props;
        const score = [];
        Object.keys(users).map((uid) => score.push([users[uid].questions.length + Object.keys(users[uid].answers).length, uid]));
        score.sort().reverse();
        return await this.setState({ userScore: score })
    }
    render() {
        const { userScore } = this.state;
        const { users } = this.props;
        console.log(userScore);
        return (
            <Fragment>
                <Navbar />
                {
                    userScore.map((el, index) => {
                        return (
                            <div className="question-container leaderboard-card" key={el[1]}>
                                <div className="leaderboard-card-number"> {index + 1} </div>
                                <div className="leaderboard-content">
                                    <div className="leaderboard-info">
                                        <div> <strong> Name:</strong> {users[el[1]].name} </div>
                                        <div> <strong>Question Asked:</strong> {users[el[1]].questions.length}</div>
                                        <div> <strong>Question Answered:</strong> {Object.keys(users[el[1]].answers).length}</div>
                                    </div>

                                    <div className="leaderboard-img-container">
                                        <img
                                            src={users[el[1]].avatarURL}
                                            alt={`${users[el[1]].name}'s`}
                                            className="leaderboard-img-itself"
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.user,
        authedUser: state.authedUser,
    }
}

export default connect(mapStateToProps)(Leaderboard);
