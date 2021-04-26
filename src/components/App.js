import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import AnswerQuestion from './AnswerQuestion';
import NotFound from './NotFound';
import NewQuestion from './NewQuestion';


class App extends Component {
    componentDidMount () {
        this.props.dispatch (handleInitialData ())
    }

    render () {
        const { authedUser } = this.props;
        return (
            <Switch>
             {
                authedUser === null ? 
                <Route exact path="/" component={Login} /> :
                <Fragment>
                    <Route exact path="/" component={Dashboard} />
                    <Route exact path="/questions/:id" component={AnswerQuestion} />
                    <Route exact path="/addQuestion" component={NewQuestion} />
                    
                </Fragment>
            }
                <Route component={NotFound} />
            </Switch>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser : state.authedUser,
    }
}

export default connect (mapStateToProps) (App);