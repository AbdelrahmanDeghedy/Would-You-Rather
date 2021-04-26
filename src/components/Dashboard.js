import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Question from './Question';

class Dashboard extends Component {
    state = {
        toggle : "unanswered",
    }

    handleToggle = (e) => {
        this.setState ({
            toggle: (this.state.toggle === "unanswered" ? "answered" : "unanswered")
        }, () => {
            // enable the other button
            e.target.disabled = true;
        })
        
        // disable current button
        document.querySelector (`.${this.state.toggle}`).disabled = false;
        
    }

    componentDidMount () {
        document.querySelector (`.unanswered`).disabled = true;
    }

    render () {
        const { questions, authedUser } = this.props;
        const answeredQuestionsIds = Object.keys (questions).filter ((qid) => ( questions[qid].optionOne.votes.includes (authedUser) ) || (questions[qid].optionTwo.votes.includes (authedUser) ))
        const unansweredQuestionsIds = Object.keys (questions).filter ((qid) => !answeredQuestionsIds.includes (qid));
        

        return (
            <Fragment>
                <Navbar />
                <div className="toggle-btns">
                    <button className="toggle-btn answered" onClick={this.handleToggle}> Answered Questions: </button>
                    <button className="toggle-btn unanswered" onClick={this.handleToggle}> Unanswered Questions: </button>
                </div>
                
                {
                    this.state.toggle === "answered" ? 
                    answeredQuestionsIds.map ((qid) => {
                        return <Question key={qid} qid={qid} questions={questions} ans={questions[qid].optionOne.votes.includes (authedUser) ? questions[qid].optionOne.text : questions[qid].optionTwo.text} /> 
                    }) : 
                    unansweredQuestionsIds.map ((qid) => 
                        <Question key={qid} qid={qid} questions={questions} ans="no" />
                    )
                }

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