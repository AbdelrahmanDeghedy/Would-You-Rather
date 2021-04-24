import { combineReducers } from 'redux';
import authedUser from './authedUser';
import user from './user';
import question from './question';

export default combineReducers ({
    authedUser,
    user,
    question
})