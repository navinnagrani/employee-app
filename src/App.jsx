import EmployeeList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import { useState } from "react";
import "./styles/global.css";

function App() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  const refresh = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div className="app-container">
      <AddEmployee refresh={refresh} />
      <EmployeeList key={refreshFlag} />
    </div>
  );
}

export default App;