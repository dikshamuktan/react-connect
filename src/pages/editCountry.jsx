import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditCountry = () => {
  const [country, setCountry] = useState({});
  const { id } = useParams();
  const token = localStorage.getItem("country_token");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCountry({ ...country, [name]: value });
  };
  useEffect(() => {
    async function fetch() {
      const res = await axios({
        url: `http://localhost:8080/api/country/`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: country,
      });
      const oneCounty = res.data.find((country) => country._id === id);
      setCountry({ ...oneCounty });
    }
    fetch();
    // const updateCountry = setCountry(updateCountry);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = axios({
      url: `http://localhost:8080/api/country/edit/${id}`,
      method: "patch",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: country,
    });
    window.location.href = "/countryList";
  };

  return (
    <div className="flex h-screen justify-center p-6 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col h-96 w-2/5 bg-white p-5 rounded-lg shadow-lg "
      >
        <h1 className=" bg-sky-600 w-full  p-2 mb-4 rounded text-center text-lg font-bold outline outline-1">
          Edit Country
        </h1>

        <input
          className="block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="name"
          type="text"
          placeholder="Country name"
          value={country.name}
          onChange={handleChange}
        />

        <input
          className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="countryCode"
          type="text"
          placeholder="countryCode"
          value={country.countryCode}
          onChange={handleChange}
        />

        <input
          className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="capitalCity"
          type="text"
          placeholder="capitalcity"
          value={country.capitalCity}
          onChange={handleChange}
        />

        <input
          className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500"
          name="Population"
          type="number"
          placeholder="population"
          value={country.Population}
          onChange={handleChange}
        />

        <button className=" bg-sky-600 p-2 block mb-4  rounded outline outline-1 focus:ring focus:border-blue-500 ">
          Upload
        </button>
      </form>
    </div>
  );
};

export default EditCountry;
