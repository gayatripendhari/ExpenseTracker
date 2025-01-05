import React,{ useState }  from 'react';
import Navbar from "./LoginPage/Navbar.jsx"
import Home from "./LoginPage/Home.jsx"
import Forms from "./LoginPage/Forms.jsx"
import LoginPage from "./LoginPage/Login.jsx";
import ExpenseTracker from "./Features/ExpenseTracker.jsx"

const App = () => {
  const [formType, setFormType] = useState("");
  const [page, setPage] = useState("home");

  const handleOpenForm = (type) => {
    setFormType(type);
  };

  const handleSuccess = (nextPage) => {
    setFormType("");
    if (nextPage === "expensetracker") {
      setPage("expensetracker");
    } else {
      setFormType(nextPage);
    }
  };

  return (
    <div>
       <Navbar onButtonClick={handleOpenForm} />
      {page === "home" && !formType && <Home onStartTracking={() => handleOpenForm("login")} />}
      {formType && <Forms formType={formType} onClose={() => setFormType("")} onSuccess={handleSuccess} />}
      {page === "expensetracker" && <ExpenseTracker />}    
    </div>
  );
};

export default App;
