import classes from "./QuestionItem.module.css";

function QuestionItem(props) {
  const { q } = props;
  return (
    <div key={q.id} className={classes.container}>
      <h3>Would you rather?</h3>
      <hr></hr>
      <p>{q.optionOne.text}</p>
      <button>view question</button>
    </div>
  );
}

export default QuestionItem;
