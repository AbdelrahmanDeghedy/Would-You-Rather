import { getInitialData, _saveQuestion, _saveQuestionAnswer } from '../utils/api';
import { receiveQuestion, addQuestion, addQuestionAnswer } from './question';
import { receiveUser, addUserQuestion, addUserAnswer } from './user';



export function handleInitialData () {
    return (dispatch) => {
        return getInitialData ()
        .then (({user, question}) => {
            dispatch (receiveQuestion (question));
            dispatch (receiveUser (user))
        })
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { authedUser } = getState (); 
        return _saveQuestion ({
            optionOne,
            optionTwo,
            author : authedUser
        })
        .then ((question) => {
            dispatch (addQuestion (question));
            dispatch (addUserQuestion (question.id, authedUser))
        })
    }
}

export function handleAddAnswer (qid, option) {
    return (dispatch, getState) => {
        const { authedUser } = getState ();
        return _saveQuestionAnswer ({
            authedUser,
            qid,
            option
        })
        .then (() => {
            dispatch (addQuestionAnswer (authedUSer, qid, option));
            dispatch (addUserAnswer (authedUser, qid, option));
        })
    }
}