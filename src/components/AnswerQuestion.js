import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar'
import { handleAddAnswer } from '../actions/shared';
import NotFound from './NotFound';


class AnswerQuestion extends Component {

    handleAnswer = (e) => {
        const selectedOption = e.target.textContent.trim();

        const { dispatch, authedUser } = this.props;
        const { optionOneText, optionTwoText, qid } = this.props.location.state;
        const { questions } = this.props;
        let option = "";

        if (selectedOption === optionOneText) {
            option = "optionOne";
        }
        else if (selectedOption === optionTwoText) {
            option = "optionTwo";
        }
        console.log("answer is: ", questions[qid][option].text);

        questions[qid][option].votes.push(authedUser);

        // Update the API
        dispatch(handleAddAnswer(qid, option));


        this.props.history.replace({
            pathname: `/questions/${qid}`,
            state: { optionOneText, optionTwoText, answer: questions[qid][option].text, qid }
        });

    }

    render() {

        // Catch invalid questions urls
        if (!this.props.location.state) {
            return <NotFound />
        }

        const { optionOneText, optionTwoText, answer, qid } = this.props.location.state;
        const { questions, users } = this.props;

        const optionOneLength = questions[qid]?.optionOne?.votes?.length;
        const optionTwoLength = questions[qid]?.optionTwo?.votes?.length;
        const optionOnePercentage = (optionOneLength / (optionOneLength + optionTwoLength)) * 100;
        const optionTwoPercentage = (optionTwoLength / (optionOneLength + optionTwoLength)) * 100;

        return (
            <Fragment>

                <Navbar />
                <div className="question-container question-answer-container">

                    <div className="answer-question-header">
                        <h4 className="answer-question-header-title"> Would You rather: </h4>
                        <div className="question-asker"> Asked by:</div>
                        <div className="question-asker-img">
                            <img
                                src={users[questions[qid].author].avatarURL}
                                alt={`${users[questions[qid].author].name}'s`}
                                className="question-asker-img-itself"
                            />
                        </div>
                    </div>



                    {answer === optionOneText && (
                        <div className="answer-buttons">
                            <button disabled className="btn answer-btn active-chosen-answer"> {optionOneText} </button>
                            <button disabled className="btn answer-btn "> {optionTwoText} </button>
                            <div> First Option <span className="different-color-text"> ({optionOnePercentage.toFixed(1)}%) </span> / Second Option <span className="different-color-text"> ({optionTwoPercentage.toFixed(1)}%)</span> </div>
                            <div> First Option: <span className="different-color-text"> {optionOneLength} votes</span> / Second Option: <span className="different-color-text"> {optionTwoLength} votes</span> </div>
                        </div>
                    )}

                    {answer === optionTwoText && (
                        <Fragment>

                            <div className="answer-buttons">
                                <button disabled className="btn answer-btn hover-remover"> {optionOneText} </button>
                                <button disabled className="btn answer-btn active-chosen-answer hover-remover"> {optionTwoText} </button>
                            </div>
                            <div className="answer-info">
                                <div> First Option <span className="different-color-text"> ({optionOnePercentage.toFixed(1)}%) </span> / Second Option <span className="different-color-text"> ({optionTwoPercentage.toFixed(1)}%)</span> </div>
                                <div> First Option: <span className="different-color-text"> {optionOneLength} votes</span> / Second Option: <span className="different-color-text"> {optionTwoLength} votes</span> </div>
                            </div>
                        </Fragment>
                    )}

                    {(answer !== optionOneText && answer !== optionTwoText) && (
                        <div className="answer-buttons">
                            <button className="btn answer-btn" onClick={this.handleAnswer}> {optionOneText} </button>
                            <button className="btn answer-btn" onClick={this.handleAnswer}> {optionTwoText} </button>
                        </div>
                    )}


                </div>
            </Fragment >
        )
    }
}

function mapStateToProps(state) {
    return {
        questions: state.question,
        authedUser: state.authedUser,
        users: state.user,
    }
}

export default withRouter(connect(mapStateToProps)(AnswerQuestion));