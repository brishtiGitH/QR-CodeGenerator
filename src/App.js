import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import AdminPage from "./components/Admin";
import Create from "./components/create";
import Read from "./components/read";
import Update from "./components/update";

function App() {

  return (

    <div className="App">

      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/read" element={<Read />} />
          <Route exact path="/update" element={<Update />} />
          <Route exact path="/admin/*" element={<AdminPage />} />
        </Routes>
      </Router>

    </div>

  );
}

export default App;
