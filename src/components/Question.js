import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Question extends Component {
    handleClick = (e) => {
        const optionOneText = e.target.getAttribute('option-one-text');
        const optionTwoText = e.target.getAttribute('option-two-text');
        const answer = e.target.getAttribute('answer');
        const qid = e.target.getAttribute('qid');

        this.props.history.push({
            pathname: `/questions/${qid}`,
            state: { optionOneText, optionTwoText, answer, qid }
        })
    }

    render() {
        const { qid, questions, ans } = this.props;
        const optionOneText = questions[qid].optionOne.text;
        const optionTwoText = questions[qid].optionTwo.text;

        return (
            <div className="question-container">
                <h4 className="cursor-pointer question-header" onClick={this.handleClick} qid={qid} answer={ans} option-one-text={optionOneText} option-two-text={optionTwoText} > Would You rather: </h4>
                <ul>
                    <li className={ans === optionOneText ? "possible-answer active-answer" : "possible-answer"} > {optionOneText} </li>
                    <li className={ans === optionTwoText ? "possible-answer active-answer" : "possible-answer"} > {optionTwoText} </li>
                </ul>
            </div>
        )
    }
}


export default withRouter(Question);