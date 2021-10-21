import { usersActions } from "./users-slice";
import { getUsers } from "../API/API";
export function fetchUsersData() {
  return (dispatch) => {
    getUsers().then((users) => {
      dispatch(usersActions.recieveUsers({ users: users}));
    });
  };
}

export function answerQ(info) {
  return (dispatch) => {
    dispatch(usersActions.answeredQuestion({
      authedUser: info.authedUser,
      qid: info.qid,
      answer: info.answer,
    }))
  }
}