import { useSelector } from "react-redux";
import QuestionList from "../QuestionList/QuestionList";
function AnsweredQuestions() {
  const Answered = useSelector((state) => state.authUser.answeredQuestoins);
  return <QuestionList questions={Answered} listName="Answered" />;
}

export default AnsweredQuestions;
