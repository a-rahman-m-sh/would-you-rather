import { authUserActions } from "./authUser-slice";
export function setUserAuthed(id) {
  return (dispatch) => {
    dispatch(authUserActions.setAuthUser({ userId: id }));
  };
}
export function UpdateUQHaandler(id) {
  return (dispatch, getState) => {
    const questions = getState().questions.questions;
    const unAnsweredQuestions = Object.values(questions).filter((q) => {
      return (
        q.optionOne.votes.indexOf(id) === -1 &&
        q.optionTwo.votes.indexOf(id) === -1
      );
    });

    const unAnsweredQuestionsIds = unAnsweredQuestions.map((q) => {
      return q.id;
    });

    const answeredQuestoins = Object.values(questions).filter((q) => {
      return (
        q.optionOne.votes.indexOf(id) > -1 || q.optionTwo.votes.indexOf(id) > -1
      );
    });

    const answeredQuestionsIds = answeredQuestoins.map((q) => {
      return q.id;
    });
    dispatch(
      authUserActions.updateAuthUserQuestions({
        answeredQuestoins: answeredQuestoins,
        unAnsweredQuestions: unAnsweredQuestions,
        answeredQuestionsIds: answeredQuestionsIds,
        unAnsweredQuestionsIds: unAnsweredQuestionsIds,
      })
    );
  };
}
export function updateCreatedQuestions(id) {
  return (dispatch) => {
    dispatch(authUserActions.updateAddedQuestions({ id: id }));
  };
}
export function removeAuthedUser() {
  return (dispatch) => {
    dispatch(authUserActions.removeAuthUser());
  };
}
