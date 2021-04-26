import React, { Component, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar'
import { handleAddAnswer } from '../actions/shared';

class AnswerQuestion extends Component {

    handleAnswer = (e) => {
        const selectedOption = e.target.textContent.trim ();
        
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
        console.log(option);

        questions[qid][option].votes.push (authedUser);
        
        // Update the API
        dispatch (handleAddAnswer(qid, option));

        this.props.history.push ('/');
        
    }

    render () {
        const { optionOneText, optionTwoText, answer, qid } = this.props.location.state;
        const { questions, users } = this.props;

        const optionOneLength = questions[qid]?.optionOne?.votes?.length;
        const optionTwoLength = questions[qid]?.optionTwo?.votes?.length;
        const optionOnePercentage  = (optionOneLength / (optionOneLength + optionTwoLength)) * 100;
        const optionTwoPercentage  = (optionTwoLength / (optionOneLength + optionTwoLength)) * 100;

        return (
            <Fragment>

            <Navbar />
            <div className="question-container">
                
                <h4 className="answer-question-header"> Would You rather: <span className="question-asker"> Asked by: {users[questions[qid].author].name} </span></h4>
                {answer === optionOneText && (
                    <Fragment>
                        <button disabled className="answer-option cursor-pointer active-chosen-answer"> {optionOneText} </button>
                        <button disabled className="answer-option cursor-pointer "> {optionTwoText} </button>
                        <div> First Option ({optionOnePercentage}%) / Second Option ({optionTwoPercentage}%) </div>
                    </Fragment>
                )}

                {answer === optionTwoText && (
                    <Fragment>
                        <button disabled className="answer-option cursor-pointer "> {optionOneText} </button>
                        <button disabled className="answer-option cursor-pointer active-chosen-answer"> {optionTwoText} </button>
                        <div> First Option ({optionOnePercentage}%) / Second Option ({optionTwoPercentage}%) </div>
                    </Fragment>
                )}

                {(answer !== optionOneText && answer !== optionTwoText) && (
                    <Fragment>
                        <button className="answer-option cursor-pointer answer-option-hover" onClick={this.handleAnswer}> {optionOneText} </button>
                        <button className="answer-option cursor-pointer answer-option-hover" onClick={this.handleAnswer}> {optionTwoText} </button>
                    </Fragment>
                )}
                
                
            </div>
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        questions : state.question,
        authedUser : state.authedUser,
        users : state.user,
    }
}

export default withRouter (connect (mapStateToProps) (AnswerQuestion));