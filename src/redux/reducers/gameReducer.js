import { createSlice } from "@reduxjs/toolkit";
import {
    CATEGORIES_NUMBERS,
    QUESTION_NUMBERS,
    SELECTED_DIFFICULTY,
    REMIANING_CATEGORIES,
    SELECTED_CATEGORY,
    CATEGORIES_ITERATION_COUNT
} from "../../constants/localstorageConstant";
import { difficulties } from "../../constants/appConstants";
import { getString, saveString, getJson, saveJson } from "../../utils/localStorage";
import _ from 'lodash'

const setQuestionsNumber = (difficulty) => {
    switch (difficulty) {
        case difficulties.EASY:
            return process.env.REACT_APP_QUESTIONS_EASY || 5;
        case difficulties.MEDIUM:
            return process.env.REACT_APP_QUESTIONS_MEDIUM || 10;
        case difficulties.HARD:
            return process.env.REACT_APP_QUESTIONS_HARD || 20;
        default:
            return process.env.REACT_APP_QUESTIONS_EASY || 5;
    }
};

const setCategoriesNumber = (difficulty) => {
    switch (difficulty) {
        case difficulties.EASY:
            return process.env.REACT_APP_CATEGORIES_EASY || 1;
        case difficulties.MEDIUM:
            return process.env.REACT_APP_CATEGORIES_MEDIUM || 2;
        case difficulties.HARD:
            return process.env.REACT_APP_CATEGORIES_HARD || 5;
        default:
            return process.env.REACT_APP_CATEGORIES_EASY || 5;
    }
};

const initialState = {
    difficulty: getString(SELECTED_DIFFICULTY)
        ? parseInt(getString(SELECTED_DIFFICULTY), 10)
        : difficulties.EASY,
    questionNumbers: getString(QUESTION_NUMBERS)
        ? parseInt(getString(QUESTION_NUMBERS), 10)
        : process.env.REACT_APP_QUESTIONS_EASY,
    categoriesNumbers: getString(CATEGORIES_NUMBERS)
        ? parseInt(getString(CATEGORIES_NUMBERS), 10)
        : process.env.REACT_APP_CATEGORIES_EASY,
    remainingCategories: getJson(REMIANING_CATEGORIES) || [],
    selectedCategory: getString(SELECTED_CATEGORY) ? parseInt(getString(SELECTED_CATEGORY), 10) : null,
    categoriesIterationCount: getString(CATEGORIES_ITERATION_COUNT) ? parseInt(getString(CATEGORIES_ITERATION_COUNT), 10) : process.env.REACT_APP_CATEGORIES_MEDIUM
};

export const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        setupGame: (state, action) => {
            const { difficulty } = action.payload;
            state.difficulty = difficulty;
            state.questionNumbers = setQuestionsNumber(difficulty);
            state.categoriesNumbers = setCategoriesNumber(difficulty);
            state.categoriesIterationCount = setCategoriesNumber(difficulty);

            saveString(SELECTED_DIFFICULTY, difficulty);
            saveString(CATEGORIES_NUMBERS, setCategoriesNumber(difficulty));
            saveString(QUESTION_NUMBERS, setQuestionsNumber(difficulty));
            saveString(CATEGORIES_ITERATION_COUNT, setCategoriesNumber(difficulty))
        },
        setRemainingCategories: (state, action) => {
            const { remainingCategories, selectedCategory } = action.payload
            state.remainingCategories = remainingCategories
            state.selectedCategory = selectedCategory
            state.categoriesIterationCount = state.categoriesIterationCount - 1

            saveJson(CATEGORIES_ITERATION_COUNT, state.categoriesIterationCount)
            saveJson(REMIANING_CATEGORIES, remainingCategories)
            saveString(SELECTED_CATEGORY, selectedCategory)
        }
    },
});

export const { setupGame, setRemainingCategories } = gameSlice.actions
export default gameSlice.reducer;
