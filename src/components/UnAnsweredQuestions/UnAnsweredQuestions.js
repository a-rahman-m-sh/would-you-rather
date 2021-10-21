import { useSelector } from "react-redux";
import QuestionList from "../QuestionList/QuestionList";

function UnAnsweredQuestions() {
  const UnAnswered = useSelector((state) => state.authUser.unAnsweredQuestions);

  // function getUnAnsweredQuestions() {
  //   return UnAnswered.sort(
  //     (user_a, user_b) => user_b.timestamp - user_a.timestamp
  //   );
  // }
  // const UnAnsweredSort = getUnAnsweredQuestions();
  // console.log(UnAnsweredSort);
  return <QuestionList questions={UnAnswered} listName="Un Answered" />;
}

export default UnAnsweredQuestions;
