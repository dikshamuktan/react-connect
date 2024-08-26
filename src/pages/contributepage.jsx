import axios from "axios";
import { useState } from "react";


function CountryForm(){
    const [country,setCountry]=useState({
        name:"",
        countryCode:"",
        capitalCity:"",
        Population:"",
    })

   const token= localStorage.getItem("country_token")


    const handleChange=(e)=>{
        const {name,value}=e.target;
        setCountry({...country,[name]:value})
    }


   
    const addCountries=async(e)=>{
        try{
           e.preventDefault();
           
           const res= await axios({
            url:"http://localhost:8080/api/country/add",
            method:"POST",
            headers:{
                Authorization: `Bearer ${token}`,
                "Content-Type":"application/json",
            },
            data:country
            })
            setCountry({email:"",password:""});
           console.log(res.data)

        }catch(err){
            console.log(err.response?.data)
        
          
        }
       
    }

    return(
        <div className="flex h-screen justify-center p-6 ">
            <form onSubmit={addCountries} className="flex flex-col h-96 w-2/5 bg-white p-5 rounded-lg shadow-lg ">

            <h1 className=" bg-sky-600 w-full  p-2 mb-4 rounded text-center text-lg font-bold outline outline-1">Create Country</h1>

            <input className="block w-full p-3 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500" 
            name="name" type="text" placeholder="Country name" value={country.name}
            onChange={handleChange}/>

            <input className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500" 
             name="countryCode" type="text"placeholder="countryCode"value={country.countryCode}
            onChange={handleChange}/>

            <input className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500" 
             name="capitalCity" type="text"placeholder="capitalcity"value={country.capitalCity}
            onChange={handleChange}/>

            <input className="block w-full p-2 mb-4  rounded outline outline-1 focus:ring focus:border-blue-500" 
             name="Population" type="number" placeholder="population" value={country.Population}
            onChange={handleChange}/>

            <button className=" bg-sky-600 p-2 block mb-2  rounded outline outline-1 focus:ring focus:border-blue-500 ">register</button>
          </form>
        </div>
    )
}

export default CountryForm;