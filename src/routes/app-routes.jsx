import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../views";

const AppRoutes = () => {
  return (
    <div className="font-lexend">
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/team" element={<Team />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default AppRoutes;
