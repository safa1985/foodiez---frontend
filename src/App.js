import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useState } from "react";
import { useEffect } from "react";
import { getToken } from "./api/storage";
import UserContext from "./context/UserContext";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Recipes from "./pages/Recipes";
import RecipesList from "./components/RecipesList";

function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setUser(true);
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="App font-arial ">
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/categories" Component={Categories} />
          <Route path="/login" Component={Login} />
          <Route path="/profile" Component={Profile} />
          <Route path="/register" Component={Register} />
          <Route path="/recipes" Component={RecipesList} />
          <Route path="/recipes/:id" Component={RecipesList} />{" "}
          {/* Recipe Page */}
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
