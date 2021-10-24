import React from "react";
import "../index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Home from "./Home";
import UserList from "../components/UserList";
import Header from "./Header";
import Footer from "./Footer";
import ContactUs from "./ContactUs";
import EditUserDetails from "../components/EditUserDetails";
import AddUser from "../components/AddUser";
import MyButton from "../components/MyButton";

const App = () => {
  return (
    <Router>
    <div >
      <Header />
    </div>
    <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
          <Route exact path="/adduser">
            <AddUser />
          </Route>
          <Route exact path="/about">
          <About />
          </Route>
          <Route exact path="/edit">
          <EditUserDetails />
          </Route>
          <Route exact path="/contactus">
          <ContactUs />
          </Route>
        </Switch>
        <Footer />
    </Router>
  );
};

export default App;
