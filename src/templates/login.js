import React, { useState } from "react";

function LoginTemplate() {
  const [login, setLogin] = useState({ username: "", email: "", password: "" });
  const [btn, setBtn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setBtn(!btn);
    console.log(login.email);
  }
  function handleChange(e) {
    setLogin({ [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={login.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <button> Submit</button>
      </form>
      {btn ? (
        <p>
          username:{login.username} email:{login.email}
        </p>
      ) : (
        <p>false</p>
      )}
    </div>
  );
}

export default LoginTemplate;
