
export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER";

export function receiveQuestion (questions) {
    return {
        type : RECEIVE_QUESTION,
        questions
    }
}

export function addQuestion (question) {
    return {
        type : ADD_QUESTION,
        question
    }
}

export function addQuestionAnswer (authedUSer, qid, answer) {
    return {
        type : ADD_QUESTION_ANSWER,
        authedUSer,
        qid,    // the user that answered it
        answer
    }
}
