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

export function handleAddQuestion (optionOneText, optionTwoText) {
    
    return (dispatch, getState) => {
        const { authedUser } = getState (); 
        return _saveQuestion ({
            optionOneText,
            optionTwoText,
            author : authedUser
        })
        .then ((question) => {
            console.log("question from reducer: ", question);
            dispatch (addQuestion (question));
            dispatch (addUserQuestion (question.id, authedUser))
        })
    }
}

export function handleAddAnswer (qid, answer) {
    return (dispatch, getState) => {
        const { authedUser } = getState ();
        console.log("shared debug", qid, answer);
        return _saveQuestionAnswer ({
            authedUser,
            qid,
            answer
        })
        .then (() => {
            dispatch (addQuestionAnswer (authedUser, qid, answer));
            dispatch (addUserAnswer (authedUser, qid, answer));
        })
    }
}