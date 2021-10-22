import { Fragment, useState } from "react";
import AnsweredQuestions from "../AnsweredQuestions/AnsweredQuestions";
import UnAnsweredQuestions from "../UnAnsweredQuestions/UnAnsweredQuestions";
import classes from './Home.module.css'
function Home() {
  const [showUnAnswered,setShowUnAnswered]=useState(true)
  const [showAnswered, setShowAnswered] = useState(false)
  function showAnsweredHandler(){
    setShowUnAnswered(false)
    setShowAnswered(true)
  }
  function showUnAnsweredHandler(){
    setShowUnAnswered(true)
    setShowAnswered(false)
  }

  
  return (
    <Fragment>
      <div className={classes.container}>
        <button onClick={showUnAnsweredHandler} className={showUnAnswered? classes.active:''}>Unswered Questions</button>
        <button onClick={showAnsweredHandler} className={showAnswered? classes.active:''}>Answered Questions</button>
      </div>
      {showUnAnswered&&<UnAnsweredQuestions />}
      {showAnswered&&<AnsweredQuestions />}
    </Fragment>
  );
}

export default Home;
