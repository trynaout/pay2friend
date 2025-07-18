import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_SERVER_URL + "/api/v1/user/bulk?filter=" + filter)
      .then((response) => {
        setUsers(response.data.user);
      });
  }, [filter]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-secondary-100 mt-6">
      <div className="text-xl font-semibold text-secondary-800">Users</div>
      <div className="mt-4">
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          placeholder="Search users..."
          className="w-full px-4 py-2 border rounded-lg border-secondary-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all duration-200"
        />
      </div>
      <div className="mt-6 space-y-4">
        {users.map((user) => (
          <User key={user._id} user={user} />
        ))}
      </div>
    </div>
  );
};

function User({ user }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-4 hover:bg-secondary-50 rounded-lg transition-colors">
      <div className="flex items-center space-x-4">
        <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center">
          <div className="text-primary-700 font-semibold text-lg">
            {user.firstName[0].toUpperCase()}
          </div>
        </div>
        <div className="text-secondary-800 font-medium">
          {user.firstName} {user.lastName}
        </div>
      </div>
      <Button
        onClick={(e) => {
          navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }}
        label={"Send Money"}
      />
    </div>
  );
}
