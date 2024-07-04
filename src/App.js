import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Login from "./pages/login";
import Register from "./pages/Register";
import { useState } from "react";
import { useEffect } from "react";
import { getToken } from "./api/storage";
import UserContext from "./context/UserContext";
import Profile from "./pages/profile";
import home from "./pages/home";
import Categories from "./pages/Categories";

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
          <Route path="/" Component={home} />
          <Route path="/Categories" Component={Categories} />
          <Route path="/Categories/:categoryName" Component={Categories} />
          <Route path="/login" Component={Login} />
          <Route path="/profile" Component={Profile} />
          <Route path="/register" Component={Register} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
