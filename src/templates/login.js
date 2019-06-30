import React, { useState } from "react";

function LoginTemplate() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [btn, setBtn] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setBtn(!btn);
    console.log(username);
    console.log(email);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </form>

      <button type="submit" value="submit" onClick={handleSubmit}>
        {" "}
        Submit
      </button>

      {btn ? (
        <p>
          username:{username} email:{email}
        </p>
      ) : (
        <p>false </p>
      )}
    </div>
  );
}

export default LoginTemplate;
