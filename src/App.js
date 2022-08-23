import { Route, Routes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Topics from "./components/Topics";
import ArticlesByTopic from "./components/ArticlesByTopic";
import ArticleById from "./components/ArticleById";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/topics" element={<Topics />}></Route>
        <Route path="/topics/:topic" element={<ArticlesByTopic />}></Route>
        <Route path="/article/:article_id" element={<ArticleById />}></Route>
      </Routes>
    </div>
  );
}

export default App;
