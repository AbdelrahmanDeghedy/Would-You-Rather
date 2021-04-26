import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/shared';
import { withRouter } from 'react-router-dom';

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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h3> Would You Rather: </h3>
                    <label htmlFor="o1">
                        Option One
                    </label>
                    <input onChange={this.handleOptionOne} type="text" name="optionOne" id="o1"/>

                    <label htmlFor="o2">
                        Option One
                    </label>
                    <input onChange={this.handleOptionTwo} type="text" name="optionTwo" id="o2"/>

                    <button className="btn"> Submit </button>
                </form>

            </div>
        )
    }
}

export default withRouter (connect () (NewQuestion));