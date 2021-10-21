import {
  _getUsers,
  _getQuestions,
  formatQuestion,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA";

export function getUsers() {
  return _getUsers();
}
export function getQuestions() {
  return _getQuestions();
}

export function saveQuestion(info) {
  return _saveQuestion(info);
}

export function saveQuestionAnswer(info) {
  return _saveQuestionAnswer(info);
}

export function formatNewQuestion(info) {
  return formatQuestion(info);
}
