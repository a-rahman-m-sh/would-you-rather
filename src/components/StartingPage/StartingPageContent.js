import { useSelector } from "react-redux";
import classes from "./StartingPageContent.module.css";

const StartingPageContent = () => {
  const IsAuthUser = useSelector((state) => state.authUser.IsAuthUser);
  const authUserID = useSelector((state) => state.authUser.authUserID);
  const users = useSelector((state) => state.users.users);
  const currentUser = Object.values(users).find(
    (user) => user.id === authUserID
  );
  return (
    <section className={classes.starting}>
      <h1>Welcome on Board!</h1>
      {IsAuthUser && (
        <img
          className={classes.avtr}
          src={currentUser.avatarURL}
          alt={currentUser.name}
        />
      )}
      {IsAuthUser && <h2>{currentUser.name}</h2>}
    </section>
  );
};

export default StartingPageContent;
