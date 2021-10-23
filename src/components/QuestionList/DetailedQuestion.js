import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import classes from "./DetailedQuestion.module.css";
import { handleAddAnswer } from "../../store/questions-actions";
import Page404 from "../../pages/Page404";
function DetailedQuestion() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const questions = useSelector((state) => state.questions.questions);
  const authUser = useSelector((state) => state.authUser.authUserID);
  const AnsweredIs = useSelector(
    (state) => state.authUser.answeredQuestionsIds
  );
  const params = useParams();
  const { questionId } = params;
  const isAnswered = AnsweredIs.includes(questionId);
  const isExist = Object.keys(questions).includes(questionId);
  if (!isExist) {
    return <Page404/>
  }

  const question = Object.values(questions).find((q) => {
    return q.id === questionId;
  });
  const author = Object.values(users).find((u) => {
    return u.id === question.author;
  });
  const authorAvatar = author.avatarURL;

  const yourAnswerIsOne = question.optionOne.votes.includes(authUser);

  const yourAnswerIsTwo = question.optionTwo.votes.includes(authUser);

  function optionOneSelectHandler() {
    dispatch(
      handleAddAnswer({
        authedUser: authUser,
        qid: questionId,
        answer: "optionOne",
      })
    );
  }
  function optionTwoSelectHandler() {
    dispatch(
      handleAddAnswer({
        authedUser: authUser,
        qid: questionId,
        answer: "optionTwo",
      })
    );
  }

  const optionOneVotes = questions[questionId].optionOne.votes.length || 0;
  const optionTwoVotes = questions[questionId].optionTwo.votes.length || 0;
  const totalVotes = optionOneVotes + optionTwoVotes;
  const optionOnePrecentage = ((optionOneVotes / totalVotes) * 100).toFixed();
  const optionTwoPrecentage = ((optionTwoVotes / totalVotes) * 100).toFixed();
  return (
    <div className={classes.father}>
      <div className={classes.avtrp}>
        <img
          className={classes.avtr}
          src={`/${authorAvatar}`}
          alt={author.name}
        />
        <h2>{author.name}</h2>
      </div>
      <div className={classes["father-son"]}>
        <h1>Wouldyourather...</h1>
        <div className={classes.container}>
          <hr />
          {!isAnswered && (
            <h2 onClick={optionOneSelectHandler}>{question.optionOne.text}</h2>
          )}
          {isAnswered && (
            <div>
              <h2>{question.optionOne.text}</h2>
              {yourAnswerIsOne && <button>Your Choice </button>}
              <button>{` Option One Precentage Is: ${optionOnePrecentage}% (${optionOneVotes} Votes)`}</button>
            </div>
          )}
          <hr />
        </div>
        <div className={classes.container}>
          <hr />
          {!isAnswered && (
            <h2 onClick={optionTwoSelectHandler}>{question.optionTwo.text}</h2>
          )}
          {isAnswered && (
            <div>
              <h2>{question.optionTwo.text}</h2>
              {yourAnswerIsTwo && <button>Your Choice </button>}
              <button>{` Option Two Precentage Is: ${optionTwoPrecentage}% (${optionTwoVotes} Votes)`}</button>
            </div>
          )}
          <hr />
        </div>
      </div>
    </div>
  );
}

export default DetailedQuestion;
