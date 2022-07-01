import { createSlice } from "@reduxjs/toolkit";
import { QUESTIONS_LIST } from '../../constants/localstorageConstant'
import { getJson, saveJson } from "../../utils/localStorage";

const initialState = {
    questionsList: getJson(QUESTIONS_LIST) || [],
    questionsAnswers: []
}


export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        setQuestions: (state, action) => {
            const { questionsList } = action.payload
            state.questionsList = [...state.questionsList, ...questionsList]

            saveJson(QUESTIONS_LIST, questionsList)
        },
        setQuestionAnswer: (state, action) => {
            const { answer, time, correctAnswer } = action.payload
            state.questionsAnswers = [...state.questionsAnswers, { answer, time, correctAnswer }]
        }
    }
})

export const { setQuestions, setQuestionAnswer } = questionSlice.actions
export default questionSlice.reducer;