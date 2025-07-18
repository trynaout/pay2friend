import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Dashboard = () => {
  const [bal, setBal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const userToken = localStorage.getItem("token");

    if (!userToken) {
      navigate("/signin");
    } else {
      axios
        .get(import.meta.env.VITE_SERVER_URL + "/api/v1/account/balance", {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        })
        .then((response) => {
          setBal(response.data.balance);
        })
        .catch((error) => {
          navigate("/signin");
        });
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-secondary-50">
      <Appbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Balance value={bal} />
        <Users />
      </div>
    </div>
  );
};
