import { combineReducers } from 'redux';
import authedUser from './authedUser';
import user from './user';
import question from './question';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers ({
    authedUser,
    user,
    question,
    loadingBar : loadingBarReducer,
})