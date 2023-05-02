import { useState } from "react";
import AppRoutes from "./routes/app-routes";
import { DarkModeToggle } from "./components";

function App() {
  const [darkToggle, setDarkToggle] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  const toggleDark = () => {
    if (darkToggle) {
      localStorage.setItem("theme", "light");
      setDarkToggle(false);
    } else {
      localStorage.setItem("theme", "dark");
      setDarkToggle(true);
    }
  };

  return (
    <div className={darkToggle ? "dark" : ""}>
      <DarkModeToggle toggleDark={toggleDark} />
      <AppRoutes />
    </div>
  );
}

export default App;
