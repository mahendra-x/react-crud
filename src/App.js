
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Employee from "./Components/Emplyee/Employee";
import Department from "./Components/Department/Department";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />} />

        <Route path="/employee" element={<Employee />} />

        <Route path="/dept" element={<Department />} />
      </Routes>
    </Router>
  );
}

export default App;
