import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthPage = () => {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>{showLogin ? "Bem-vindo!" : "Cadastre-se"}</h2>
        {showLogin ? <LoginForm /> : <SignupForm />}
        <button className="toggle-button" onClick={toggleForm}>
          {showLogin ? "Criar uma conta" : "Já tenho conta"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;
