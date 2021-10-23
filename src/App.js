import Layout from "./components/layout/Layout";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
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
  const location = useLocation();
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
          {!IsAuthUser && <SignInPage />}
          {!IsAuthUser && alert("Login to play the game ...")}
        </Route>

        <Route path="/question/:questionId">
          {IsAuthUser && <DetailedQuestion />}
          {!IsAuthUser && (
            <Redirect
              to={{ pathname: "/", state: { from: location.pathname } }}
            />
          )}
        </Route>
        <Route path="/add" exact>
          {IsAuthUser && <AddQuestionPage />}
          {!IsAuthUser && (
            <Redirect
              to={{ pathname: "/", state: { from: location.pathname } }}
            />
          )}
        </Route>
        <Route path="/leaderBoard" exact>
          {IsAuthUser && <LeaderboardPage />}
          {!IsAuthUser && (
            <Redirect
              to={{ pathname: "/", state: { from: location.pathname } }}
            />
          )}
        </Route>
        <Route path="*">
          <Redirect
            to={{ pathname: "/", state: { from: location.pathname } }}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
