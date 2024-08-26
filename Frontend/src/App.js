import React, { useState } from "react";
import Sixty from "./sixtyProject/Sixty";
import LoginPage from "./sixtyProject/LoginPage";
import SignupPage from "./sixtyProject/SignupPage";
import SecondPage from "./sixtyProject/SecondPage";
// import List from "./sixtyProject/List";
import Note from "./sixtyProject/Note";
import DeletePage from "./sixtyProject/DeletePage";
import EditNote from "./sixtyProject/EditNote";
import ListItem from "./sixtyProject/ListItem";
import Header from "./sixtyProject/Header";
import Footer from "./sixtyProject/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(false);

  return (
    <div>
      <Router>
        <Header user={user} />
        <Routes>
          <Route path="/" element={<Sixty />}></Route>
          <Route
            path="/users/signin"
            element={<LoginPage user={user} setUser={setUser} />}
          ></Route>
          <Route path="/users/signup" element={<SignupPage />}></Route>
          <Route path="/lists" element={<ListItem />}></Route>
          <Route
            path="/users/dashboard"
            element={user ? <SecondPage /> : <LoginPage />}
          ></Route>
          <Route path="/note" element={<Note />}></Route>
          <Route path="/delete-page" element={<DeletePage />}></Route>
          <Route path="/edit-note" element={<EditNote />}></Route>
        </Routes>
        <Footer />
      </Router>
      {/* <Sixty /> 
      <LoginPage/>
      <SignupPage/> */}
      {/* <SecondPage /> */}
      {/* <List />  */}
    </div>
  );
};

export default App;
