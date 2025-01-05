import React,{useState} from 'react'
import Navbar from "./Navbar.jsx"
import Home from "./Home.jsx"
import Forms from "./Forms.jsx";

const Login = () => {

  const [formType, setFormType] = useState("");

  const handleOpenForm = (type) => {
    setFormType(type);
  };


  return (
    <div>
        <Navbar onButtonClick={handleOpenForm} />
        {formType ? (
          <Forms formType={formType} onClose={() => setFormType("")} />
        ) : (
          <Home onStartTracking={() => handleOpenForm("login")} />
        )}
    </div>
  )
}

export default Login