import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar';

class NewQuestion extends Component {
    

    state = {
        optionOne : "",
        optionTwo : "",
    }
    
    handleOptionOne = (e) => {
        this.setState ({
            optionOne : e.target.value
        })
    }

    handleOptionTwo = (e) => {
        this.setState ({
            optionTwo : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault ();
        const { dispatch } = this.props;
        const { optionOne, optionTwo } = this.state;

        dispatch (handleAddQuestion (optionOne, optionTwo));

        this.props.history.push ('/');
    }

    render () {
         
        return (
            <Fragment>
                <Navbar />
                <div className="add-question-card">
                    <form onSubmit={this.handleSubmit}>
                        <h3 className="add-question-header"> Would You Rather: </h3>
                        <label htmlFor="o1" className="add-question-label">
                            Option One
                        </label>
                        <input className="add-question-input" onChange={this.handleOptionOne} type="text" name="optionOne" id="o1"/>

                        <label className="add-question-label" htmlFor="o2">
                            Option Two
                        </label>
                        <input className="add-question-input" onChange={this.handleOptionTwo} type="text" name="optionTwo" id="o2"/>

                        <button className="btn add-question-btn"> Submit </button>
                    </form>

                </div>
            </Fragment>
        )
    }
}

export default withRouter (connect () (NewQuestion));