import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./component/Header";
import Home from "./component/pages/Home";
import Objective from "./component/pages/Objective";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/objective" element={<Objective />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
