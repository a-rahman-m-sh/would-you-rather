import { useSelector } from "react-redux";
import classes from "./LeaderBoard.module.css";
function LeaderBoard() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className={classes.father}>
      <h1>Leader Board</h1>
      {Object.values(users).map((user) => {
        const answers = Object.keys(user.answers).length;
        const questions = Object.values(user.questions).length;

        return (
          <div className={classes.father} key={user.id}>
            <div className={classes.container}>
              <img
                className={classes.avtr}
                src={user.avatarURL}
                alt={user.name}
              />
              <p className={classes.name}>{user.name}</p>
            </div>
            <div>
              <button>{`Answered Questions : ${answers}`}</button>
              <button>{`Created Questions :${questions}`}</button>
            </div>
            <button>{`Total Score :${answers+questions}`}</button>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderBoard;
