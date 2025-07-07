import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="UserName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="rounded-pill" type="submit">Login</button>
    </form>
  );
};

export default Login;