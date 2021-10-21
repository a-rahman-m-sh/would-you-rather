import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [],
  },
  reducers: {
    recieveQuestions(state, action) {
      state.questions = action.payload.questions;
      console.log(state.questions);
    },

    recieveAnswer(state, action) {
      const { authedUser, qid, answer } = action.payload;
      state.questions = {
        ...state.questions,
        [qid]: {
          ...state.questions[qid],
          [answer]: {
            ...state.questions[qid][answer],
            votes: state.questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };
    },

    addQuestion(state, action) {
      state.questions = {
        ...state.questions,
        [action.payload.id]: action.payload,
      };
      console.log(state.questions);
    },
  },
});

export const questionsActions = questionsSlice.actions;
export default questionsSlice;
