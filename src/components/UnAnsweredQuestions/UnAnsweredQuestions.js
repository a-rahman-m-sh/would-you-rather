import { useSelector } from "react-redux";
import QuestionList from "../QuestionList/QuestionList";

function UnAnsweredQuestions() {
  const UnAnswered = useSelector((state) => state.authUser.unAnsweredQuestions);
  return <QuestionList questions={UnAnswered} listName="Un Answered" />;
}

export default UnAnsweredQuestions;
