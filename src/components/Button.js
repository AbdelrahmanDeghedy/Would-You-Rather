import React, { Component } from 'react';
import { Fragment } from 'react';

class Button extends Component {
    render() {
        return (
            <Fragment>
                <div className={`btn ${this.props.classes}`} onClick={this.props.handler}>
                    {this.props.content}
                </div>
            </Fragment>
        )

    }
}

export default Button;