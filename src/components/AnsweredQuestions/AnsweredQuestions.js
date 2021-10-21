import { useSelector } from "react-redux";
import QuestionList from "../QuestionList/QuestionList";
function AnsweredQuestions() {
  const Answered = useSelector((state) => state.authUser.answeredQuestoins);
  // function getAnsweredQuestions() {
  //   return Answered.sort(
  //     (user_a, user_b) => user_b.timestamp - user_a.timestamp
  //   );
  // }
  // const AnsweredSorted = getAnsweredQuestions();
  // console.log(AnsweredSorted);
  return <QuestionList questions={Answered} listName='Answered' />;
}

export default AnsweredQuestions;
