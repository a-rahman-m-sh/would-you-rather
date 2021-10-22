import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./NewQuestion.module.css";
import { handleAddQuestion } from "../../store/questions-actions";
import { UpdateUQHaandler } from "../../store/authUser-actions";
import { useHistory } from "react-router";
function NewQuestion(props) {
  const userId = useSelector((state) => state.authUser.authUserID);
  const questions = useSelector((state) => state.questions.questions);

  const optionOneInputRef = useRef();
  const optionTwoInputRef = useRef();
const history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(UpdateUQHaandler(userId));
  }, [dispatch, questions, userId]);
  function submitHandler(e) {
    e.preventDefault();
    if (
      optionOneInputRef.current.value === "" ||
      optionTwoInputRef.current.value === ""
    ) {
      return;
    }
    dispatch(
      handleAddQuestion(
        optionOneInputRef.current.value,
        optionTwoInputRef.current.value
      )
    ).then(()=>history.push("/"))
    
  }
  return (
    <div className={classes.father}>
      <div className={classes.container}>
        <h1>Add Question</h1>
        <h2> Would You Rather...</h2>
        <form onSubmit={submitHandler}>
          <div>
            <p>Option One</p>
            <input ref={optionOneInputRef} />
          </div>
          <div>
            <p>Option Two</p>

            <input ref={optionTwoInputRef} />
          </div>

          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default NewQuestion;
