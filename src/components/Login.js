import React, { Component } from 'react';

export default class Login extends Component {
    render () {
        return (
            <div>
                <h3>Who Are You?</h3>
                {/* <button onClick={setAuthedUser}> Sarah Edo </button> */}
                <button> Tyler McGinnis </button>
                <button> John Doe </button>
            </div>
        )
    }
}