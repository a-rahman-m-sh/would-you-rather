import { useDispatch, useSelector } from "react-redux";
import classes from "./LoginPage.module.css";
import { setUserAuthed, UpdateUQHaandler } from "../../store/authUser-actions";
function LoginPage() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  function authHandler(id) {
    dispatch(setUserAuthed(id));
    dispatch(UpdateUQHaandler(id));
  }

  return (
    <div className={classes.father}>
      {Object.values(users).map((user) => {
        return (
          <div
            className={classes.container}
            key={user.id}
            onClick={() => authHandler(user.id)}
          >
            <img
              className={classes.avtr}
              src={user.avatarURL}
              alt={user.name}
            />
            <p className={classes.name}>{user.name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default LoginPage;
