import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import Login from './Login';
import Dashboard from './Dashboard';
import AnswerQuestion from './AnswerQuestion';
import NotFound from './NotFound';
import NewQuestion from './NewQuestion';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
    componentDidMount () {
        this.props.dispatch (handleInitialData ())
    }

    render () {
        const { authedUser } = this.props;
        return (
            <Fragment>
                <LoadingBar />
                <Switch>
                {
                    authedUser === null ? 
                    <Route component={Login} /> :
                    <Fragment>
                        <Route exact path="/" component={Dashboard} />
                        <Route exact path="/questions/:id" component={AnswerQuestion} />
                        <Route exact path="/add" component={NewQuestion} />
                        <Route exact path="/leaderboard" component={Leaderboard} />
                        
                    </Fragment>
                }
                    <Route component={NotFound} />
                </Switch>
            </Fragment>
        )
    }
}

function mapStateToProps (state) {
    return {
        authedUser : state.authedUser,
    }
}

export default connect (mapStateToProps) (App);