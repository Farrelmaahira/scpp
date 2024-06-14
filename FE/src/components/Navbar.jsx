import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [user, setUser] = useState();
  const [active, setActive] = useState(false);
  const url = import.meta.env.VITE_BASE_APP_URL;
  const TOKEN = sessionStorage.getItem("token");
  const navigate = useNavigate()
  const fetchAPI = async () => {
    const response = await axios.get(`${url}/api/`, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    setUser(response.data.user.username);
  };
  
  useEffect(() => {
    fetchAPI();
  }, []);

  const toggleButton = () => {
    setActive(!active);
  };

  const logoutButton = async () => {
    const response = await axios.get(`${url}/api/v1/logout`, {
      headers : {
        Authorization : `Bearer ${TOKEN}`
      }
    })
    if(response.data.status == 'success') {
      sessionStorage.removeItem('token')
      return navigate('/')
    }
  };
  return (
    <header className="px-3 py-4 top-0 w-full z-0 border shadow-sm dark:bg-boxdark dark:drop-shadow-none bg-white flex justify-end">
      <div className="flex flex-col justify-end mx-5">
        <Button className="border rounded-md p-3 w-20 " onClick={toggleButton}>
          {user}
        </Button>
        {active && (
          <Button className="absolute p-3 top-16 mt-2 border min-w-20 bg-white rounded-md" onClick={logoutButton}>
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
