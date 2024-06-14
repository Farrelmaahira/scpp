import { useState, useEffect } from "react";
import LoginForm from "../components/fragments/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      return navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    };
    const response = await axios.post(
      "http://localhost:8000/api/v1/login",
      payload
    );
    if (response.data.status == "success") {
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      return navigate('/dashboard')
    }
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-auto bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">Login</div>
            <LoginForm
              onSubmit={handleSubmit}
              setUname={setUsername}
              setPass={setPass}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
