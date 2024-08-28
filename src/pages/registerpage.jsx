import { useState } from "react";
import axios from "axios";

function RegisterForm() {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const getReq = async (e) => {
    try {
      e.preventDefault();

      const req = await axios({
        url: "http://localhost:8080/api/user/register",
        method: "POST",
        data: user,
      });

      window.location.href = "/login";
    } catch (err) {
      console.log(err.response?.data);
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col h-screen w-full  items-center justify-between gap-48 p-2 mb-4 ">
      <form
        className="flex flex-col h-96 w-2/5 bg-white p-5  rounded-lg shadow-lg "
        onSubmit={getReq}
      >
        <h2 className="text-3xl font-bold p-3 text-center">Register Here</h2>

        <input
          className="block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={user.fullName}
          onChange={handleChange}
        />

        <input
          className="block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="email"
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
        />

        <input
          className=" block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="password"
          type="text"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

        <button className="bg-sky-600 p-2 block mb-2  rounded outline outline-1 focus:ring focus:border-blue-500 ">
          register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
