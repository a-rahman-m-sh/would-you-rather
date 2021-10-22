import { createSlice } from "@reduxjs/toolkit";

const authUserSlice = createSlice({
  name: "authUser",
  initialState: {
    authUserID: "",
    IsAuthUser: false,
    answeredQuestoins: [],
    unAnsweredQuestions: [],
    answeredQuestionsIds: [],
    unAnsweredQuestionsIds: [],
    createdQuestions: [],
  },
  reducers: {
    setAuthUser(state, action) {
      state.IsAuthUser = true;
      state.authUserID = action.payload.userId;
    },
    removeAuthUser(state) {
      state.IsAuthUser = false;
      state.authUserID = "";
      state.answeredQuestoins = [];
      state.unAnsweredQuestions = [];
      state.answeredQuestionsIds = [];
      state.unAnsweredQuestionsIds = [];
    },
    updateAuthUserQuestions(state, action) {
      state.answeredQuestoins = action.payload.answeredQuestoins;
      state.unAnsweredQuestions = action.payload.unAnsweredQuestions;
      state.answeredQuestionsIds = action.payload.answeredQuestionsIds;
      state.unAnsweredQuestionsIds = action.payload.unAnsweredQuestionsIds;
    },
    updateAddedQuestions(state, action) {
      state.createdQuestions = [...state.createdQuestions, action.payload.id];
    },
  },
});

export const authUserActions = authUserSlice.actions;
export default authUserSlice;
