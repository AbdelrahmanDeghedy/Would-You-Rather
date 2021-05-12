import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Button from './Button';

class NewQuestion extends Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }

    handleOptionOne = (e) => {
        this.setState({
            optionOne: e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState({
            optionTwo: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;

        dispatch(handleAddQuestion(optionOne, optionTwo));

        this.props.history.push('/');
    }

    render() {

        return (
            <Fragment>
                <Navbar />
                <form className="question-container add-question-card">
                    <h3 className="add-question-header"> Would You Rather: </h3>
                    <div className="add-question-item">
                        <label htmlFor="o1" className="add-question-label">
                            Option One
                            </label>
                        <input className="add-question-input" onChange={this.handleOptionOne} type="text" name="optionOne" id="o1" />
                    </div>

                    <div className="add-question-name">
                        <label className="add-question-label" htmlFor="o2">
                            Option Two
                            </label>
                        <input className="add-question-input" onChange={this.handleOptionTwo} type="text" name="optionTwo" id="o2" />
                    </div>

                    <div className="add-question-btn" onClick={this.handleSubmit}>
                        <Button content="Submit" />
                    </div>
                </form>

            </Fragment>
        )
    }
}

export default withRouter(connect()(NewQuestion));