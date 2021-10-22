import Layout from "./components/layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersData } from "../src/store/users-actions";
import { fetchQuestionsData } from "../src/store/questions-actions";
import SignInPage from "./pages/SignInPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AddQuestionPage from "./pages/AddQuestionPage";
import DetailedQuestion from "./components/QuestionList/DetailedQuestion";

function App() {
  const dispatch = useDispatch();
  const IsAuthUser = useSelector((state) => state.authUser.IsAuthUser);
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchQuestionsData());
  }, [dispatch]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {IsAuthUser && <HomePage />}
          {!IsAuthUser && <Redirect to="/login" />}
          {/* {!IsAuthUser && alert("Login to play the game ...")} */}
        </Route>
        <Route path="/login" exact>
          {!IsAuthUser && <SignInPage />}
          {IsAuthUser && <Redirect to="/" />}
        </Route>

        <Route path="/question/:questionId">
          {IsAuthUser && <DetailedQuestion />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/add" exact>
          {IsAuthUser && <AddQuestionPage />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/leaderBoard" exact>
          {IsAuthUser && <LeaderboardPage />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
