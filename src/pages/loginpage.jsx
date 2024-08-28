import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const token = localStorage.getItem("user_token");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getRequest = async (e) => {
    try {
      e.preventDefault();

      const req = await axios({
        url: "http://localhost:8080/api/user/log",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: user,
      });
      console.log(req);
      const accToken = req.data.accessToken;
      localStorage.setItem("user_token", accToken);

      window.location.href = "/contribute";

      console.log(accToken, req.data);
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="flex flex-col h-screen  items-center w-full p-4">
      <form
        className="flex flex-col h-96 w-2/5 bg-white p-5 rounded-lg shadow-lg "
        onSubmit={getRequest}
      >
        <h1 className="text-center font-bold text-xl p-3 ">Sign in</h1>
        <input
          className="block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="email"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          className="block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="password"
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <button className=" bg-sky-600 p-2 block mb-2  rounded outline outline-1 focus:ring focus:border-blue-500 ">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
