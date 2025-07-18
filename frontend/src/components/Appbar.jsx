import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "./Button";
import { Link, useNavigate } from "react-router-dom";

export const Appbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      navigate("/signin");
    } else {
      axios
        .get(import.meta.env.VITE_SERVER_URL + "/api/v1/user/getUser", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          setUser(response.data);
        });
    }
  }, []);

  const signOutHandler = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="shadow-lg bg-white border-b border-secondary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to={"/dashboard"}>
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors">
                Friend2Pay
              </div>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <Button label={"Sign Out"} onClick={signOutHandler} />
            <div className="text-secondary-700 font-medium">
              {user?.firstName}
            </div>
            <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
              <div className="text-primary-700 font-semibold text-lg">
                {user?.firstName[0]?.toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
