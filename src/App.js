import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
// import { login, logout, selectUser } from "./features/userSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { auth } from "./firebase";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Mail from "./Mail";
import EmailList from "./EmailList";

function App() {
  //WORKING CODE
  return (
    <Router>
      <div className="app">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path="/mail" element={<Mail />} />

            <Route path="/" element={<EmailList />} />
          </Routes>
        </div>
        <div>Continue here</div>
      </div>
    </Router>
  );
}
// export const user = user;
export default App;
