import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Question from './Question';

class Dashboard extends Component {
    render () {
        const { questions, authedUser } = this.props;
        const answeredQuestionsIds = Object.keys (questions).filter ((qid) => ( questions[qid].optionOne.votes.includes (authedUser) ) || (questions[qid].optionTwo.votes.includes (authedUser) ))
        const unansweredQuestionsIds = Object.keys (questions).filter ((qid) => !answeredQuestionsIds.includes (qid));
        
        console.log("Answered questions: ", answeredQuestionsIds);
        console.log("unAnswered questions: ", unansweredQuestionsIds);
        return (
            <Fragment>
                <Navbar />
                <h4>Answered Questions:</h4>
                {answeredQuestionsIds.map ((qid) => 
                    <Question key={qid} qid={qid} questions={questions} ans={questions[qid].optionOne.votes.includes (authedUser) ? questions[qid].optionOne.text : questions[qid].optionTwo.text} />
                )}

                <h4>Unanswered Questions:</h4>
                {unansweredQuestionsIds.map ((qid) => 
                    <Question key={qid} qid={qid} questions={questions} ans="no" />
                )}
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        questions : state.question,
        authedUser : state.authedUser,
    }
}

export default connect (mapStateToProps) (Dashboard)