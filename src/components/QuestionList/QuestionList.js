import { NavLink } from "react-router-dom";
import QuestionItem from "./QuestionItem";
import classes from "./QuestionItem.module.css";

function QuestionList(props) {
  const { questions } = props;

  const sortedQuestions = questions.slice().sort((q1, q2) => {
    return q2.timestamp - q1.timestamp;
  });

  return (
    <div className={classes.father}>
      <h1>{`${props.listName} Questions`}</h1>
      {sortedQuestions.map((q) => {
        return (
          <NavLink key={q.id} to={`question/${q["id"]}`} q={q}>
            <QuestionItem questions={questions} key={q.id} q={q} />
          </NavLink>
        );
      })}
    </div>
  );
}

export default QuestionList;
