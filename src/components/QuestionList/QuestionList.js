import { NavLink } from "react-router-dom";
import QuestionItem from "./QuestionItem";
import classes from "./QuestionItem.module.css";

function QuestionList(props) {
  const { questions } = props;
  return (
    <div className={classes.father}>
      <h1>{`${props.listName} Questions`}</h1>
      {questions.map((q) => {
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
