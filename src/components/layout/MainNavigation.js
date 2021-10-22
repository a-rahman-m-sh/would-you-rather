import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { removeAuthedUser } from "../../store/authUser-actions";
import { Fragment } from "react";
function MainNavigation() {
  const IsAuthUser = useSelector((state) => state.authUser.IsAuthUser);
  const authUserID = useSelector((state) => state.authUser.authUserID);
  const users = useSelector((state) => state.users.users);
  const currentUser = Object.values(users).find(
    (user) => user.id === authUserID
  );
  const dispatch = useDispatch();
  function logoutHandler() {
    dispatch(removeAuthedUser());
  }
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Would You Rather?</div>
      </Link>
      <nav>
        <ul>
          {!IsAuthUser && (
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          )}
          {IsAuthUser && (
            <li>
              <Link to="/">Home</Link>
            </li>
          )}
          {IsAuthUser && (
            <li>
              <Link to="/add">Add Question</Link>
            </li>
          )}
          {IsAuthUser && (
            <li>
              <Link to="/leaderBoard">Leader Board</Link>
            </li>
          )}
          {IsAuthUser && (
            <Fragment>
              <li>
                <Link to="/">
                  <img
                    className={classes.avtr}
                    src={currentUser.avatarURL}
                    alt={currentUser.name}
                  />
                </Link>
              </li>
              <li>
                <Link to="/">{currentUser.name}</Link>
              </li>
            </Fragment>
          )}
          {IsAuthUser && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
