import { ADD_USER_ANSWER, ADD_USER_QUESTION, RECEIVE_USER } from '../actions/user';

export default function users (state = {}, action) {
    if (action.type === ADD_USER_ANSWER) {
        const { authedUser, qid, answer } = action
        return {
            ...state,
            [authedUser] : {
                ...state[authedUser],
                answers : {
                    ...state[authedUser][answer],
                    [qid] : answer,
                }
            }
        }
    }
    else if (action.type === ADD_USER_QUESTION) {
        const { qid, authedUser } = action;
        return {
            ...state,
            [authedUser] : {
                ...state[authedUser],
                questions : state[authedUser].questions.concat ([qid])
            }
        }
    }
    else if (action.type === RECEIVE_USER) {
        return {
            ...state,
            ...action.users,
        }
    }
    else {
        return state;
    }
}