import Layout from "./components/layout/Layout";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUsersData } from "../src/store/users-actions";
import { fetchQuestionsData } from "../src/store/questions-actions";
import SignInPage from "./pages/SignInPage";
import UnAnsweredQuestionsPage from "./pages/UnAnsweredQuestionsPage";
import AnsweredQuestionsPage from "./pages/AnsweredQuestionsPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import AddQuestionPage from "./pages/AddQuestionPage";
import DetailedQuestion from "./components/QuestionList/DetailedQuestion";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);
  const IsAuthUser = useSelector((state) => state.authUser.IsAuthUser);
  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchQuestionsData());
  }, [dispatch]);

  console.log(users);
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/login">
          {!IsAuthUser && <SignInPage />}
          {IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/unAnswered">
          {IsAuthUser && <UnAnsweredQuestionsPage />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/answered">
          {IsAuthUser && <AnsweredQuestionsPage />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/question/:questionId">
          {IsAuthUser && <DetailedQuestion />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/add">
          {IsAuthUser && <AddQuestionPage />}
          {!IsAuthUser && <Redirect to="/" />}
        </Route>
        <Route path="/leaderBoard">
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
