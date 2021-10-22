import { questionsActions } from "./questions-slice";
import { getQuestions, saveQuestion, saveQuestionAnswer } from "../API/API";
import { UpdateUQHaandler, updateCreatedQuestions } from "./authUser-actions";
import { answerQ, addQ } from "./users-actions";
export function fetchQuestionsData() {
  return (dispatch) => {
    getQuestions().then((questions) => {
      dispatch(
        questionsActions.recieveQuestions({
          questions: questions,
        })
      );
    });
  };
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const authedUser = getState().authUser.authUserID;

    const info = {
      optionOneText,
      optionTwoText,
      author: authedUser,
    };
    return saveQuestion(info).then((question) => {
      dispatch(
        questionsActions.addQuestion({
          author: question.author,
          id: question.id,
          optionOne: question.optionOne,
          optionTwo: question.optionTwo,
          timeStamp: question.timeStamp,
        })
      );
      dispatch(addQ(question));
    });
  };
}
export function handleAddAnswer(info) {
  return (dispatch, getState) => {
    const authedUser = getState().authUser.authUserID;

    dispatch(
      questionsActions.recieveAnswer({
        authedUser: info.authedUser,
        qid: info.qid,
        answer: info.answer,
      })
    );
    return saveQuestionAnswer(info).then(() => {
      dispatch(UpdateUQHaandler(authedUser));
      dispatch(updateCreatedQuestions(info.qid));
      dispatch(answerQ(info));
    });
  };
}
