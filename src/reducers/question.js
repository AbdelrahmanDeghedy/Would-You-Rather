import { ADD_QUESTION, ADD_QUESTION_ANSWER, RECEIVE_QUESTION } from '../actions/question';

export default function questions (state = {}, action) {
    if (action.type === ADD_QUESTION) {
        return {
            ...state,
            [action.question.id] : action.question,
        }

    }
    else if (action.type === ADD_QUESTION_ANSWER) {
        const { authedUser, qid, answer } = action
        return {
            ...state,
            [qid] : {
                ...state[qid],
                [answer] : {
                    ...state[qid][answer],
                    votes : state[qid][answer].votes.concat (authedUser),
                }
            },

        }
    }
    else if (action.type === RECEIVE_QUESTION) {
        return {
            ...state,
            ...action.questions
        }
    }
    else {
        return state;
    }
}