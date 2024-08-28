import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "postcss";
import { Link, useParams } from "react-router-dom";

function CountryList() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const getCountry = async () => {
      try {
        const req = await axios({
          url: "http://localhost:8080/api/country",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          data: country,
        });
        setCountry(req.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCountry();
  }, []);

  const handleDelete = async (id) => {
    console.log(id);
    const token = localStorage.getItem("user_token");

    const res = await axios({
      url: `http://localhost:8080/api/country/remove/${id}`,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setCountry(res.data);

    const updatedCountry = country.filter((item) => item._id !== id);

    setCountry(updatedCountry);
  };

  return (
    <div>
      <h2 className="text-5xl font-bold flex justify-center p-3">
        Country List
      </h2>
      <div
        className="container ms-20 grid grid-cols-4 gap-10 mt-4 items-center"
        p-3
      >
        {country.map((country, index) => (
          <div
            key={index}
            className="p-4 rounded divide-lime-700 border-2 border-green-500"
          >
            <p>Country:{country.name}</p>
            <p>Code:{country.countryCode}</p>
            <p>CapitalCity:{country.capitalCity}</p>
            <p>Population:{country.Population}</p>
            <div className="flex gap-4 p-3 mt-3 ">
              <button
                className="text-lime-400 bg-green-600 rounded p-2 w-20"
                onClick={() => handleDelete(country._id)}
              >
                Delete
              </button>

              <Link
                to={`/edit/${country._id}`}
                className="text-lime-400 bg-green-600 rounded p-2 w-20 text-center"
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CountryList;
