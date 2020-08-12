import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./App.scss";

// pages
import Home from "./pages/Home";
import AdminBoard from "./pages/AdminBoard";
import ManageCoursePage from "./pages/ManageCoursePage";

//component
import BoardUser from "./components/BoardUser";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import CourseForm from "./components/CourseForm";
import CourseList from "./components/CourseList";
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/auth";
import NavbarComponents from "./components/NavbarCompoment";
import Footer from "./components/Footer";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <NavbarComponents />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/user" component={BoardUser} />
          <PrivateRoute path="/admin" component={AdminBoard} />
          <Route path="/courses" component={ManageCoursePage} />
          <Route path="/courses/:id" component={CourseList} />
          <Route path="/courses/add" component={CourseForm} />
        </Switch>
        <Footer />
      </Router>
    </AuthContext.Provider>
  );
}
export default App;
