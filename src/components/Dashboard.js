import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Dashboard extends Component {
    render () {
        return (
            <Fragment>
                <Navbar />
            </Fragment>
        )
    }
}

export default connect () (Dashboard)