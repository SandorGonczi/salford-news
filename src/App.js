import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "./utils/userContext";

import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Topics from "./components/Topics";
import Users from "./components/Users";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticleById from "./components/ArticleById";

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    avatar_url:
      "https://vignette.wikia.nocookie.net/mrmen/images/d/d6/Mr-Tickle-9a.png/revision/latest?cb=20180127221953",
    name: "Tom Tickle",
    username: "tickle122",
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <div className="App">
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/topics/:topic" element={<ArticlesByTopic />}></Route>
          <Route path="/article/:article_id" element={<ArticleById />}></Route>
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
