import { useState, useEffect } from "react";
import LoginForm from "../components/fragments/LoginForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPass] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      return navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username,
      password
    }
    const response = await axios.post('http://localhost:8000/api/login', payload);
    console.log(response);
  };

  return (
    <>
      <div className="flex justify-center h-screen">
        <div className="max-w-sm rounded overflow-hidden shadow-lg my-auto bg-white">
          <div className="px-6 py-4">
            <div className="font-bold text-2xl mb-2 text-center">Login</div>
            <LoginForm onSubmit={handleSubmit} setUname={setUsername} setPass={setPass}/>
            {/* <form action="" method="post">
              <Label title="Username" name="username">
                Username
              </Label>
              <Input
                type="text"
                name="username"
                className="rounded w-full border p-1"
                placeholder="John Doe"
              ></Input>
              <Label title="Password" name="pass">
                Password
              </Label>
              <Input
                type="password"
                name="password"
                className="rounded w-full border p-1"
                placeholder="****"
              ></Input>
              <Button
                type="submit"
                className="w-full rounded my-3 border p-2 bg-blue-500 text-white hover:bg-blue-900"
              >
                Login
              </Button>
            </form> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
