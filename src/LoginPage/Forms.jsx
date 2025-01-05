import React, { useState } from "react";
import "./Forms.css";

const Forms = ({ formType, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "", name: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formType === "signup") {
      // Simulate signup logic
      alert("Signup successful!");
      onSuccess("signin"); // Switch to signin form
    } else if (formType === "signin" || formType === "login") {
      // Simulate login logic
      alert("Login successful!");
      onSuccess("expensetracker"); // Navigate to expense tracker page
    }
  };

  const renderForm = () => {
    switch (formType) {
      case "signin":
        return (
          <div>
            <h2>Sign In</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />
              <button type="submit" className="submitButton">Sign In</button>
            </form>
          </div>
        );
      case "signup":
        return (
          <div>
            <h2>Sign Up</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />
              <button type="submit" className="submitButton">Sign Up</button>
            </form>
          </div>
        );
      case "login":
        return (
          <div>
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="input"
                required
              />
              <button type="submit" className="submitButton">Login</button>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="closeButton" onClick={onClose}>
          X
        </button>
        {renderForm()}
      </div>
    </div>
  );
};

export default Forms;
