export const RECEIVE_USER = "RECEIVE_USER";
export const ADD_USER_QUESTION = "ADD_USER_QUESTION";
export const ADD_USER_ANSWER = "ADD_USER_ANSWER";

export function receiveUser (users) {
    return {
        type : RECEIVE_QUESTION,
        users
    }
}

export function addUserQuestion (qid, authedUser) {
    return {
        type : ADD_USER_QUESTION,
        qid,
        authedUser
    }
}

export function addUserAnswer (authedUser, qid, answer) {
    return {
        type : ADD_USER_ANSWER,
        authedUser,
        qid,
        answer
    }
}