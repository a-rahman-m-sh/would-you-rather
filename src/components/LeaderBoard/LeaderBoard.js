import { useSelector } from "react-redux";
import classes from "./LeaderBoard.module.css";
function LeaderBoard() {
  const users = useSelector((state) => state.users.users);
  const sortedUsers = Object.values(users).sort((u1, u2) => {
    const user1Score = Object.keys(u1.answers).length + Object.values(u1.questions).length;
    const user2Score = Object.keys(u2.answers).length + Object.values(u2.questions).length;
    return user2Score -user1Score ;
  });


  return (
    <div className={classes.father}>
      <h1>Leader Board</h1>
      {sortedUsers.map((user) => {
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
            <button>{`Total Score :${answers + questions}`}</button>
          </div>
        );
      })}
    </div>
  );
}

export default LeaderBoard;
