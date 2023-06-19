import { useEffect, useState } from "react";
import { SeeData } from "../components/SeeData";
import { getData } from "./api/getData";

export const NotGiveUp = () => {
  
    const [data, setData] = useState([]);

    useEffect(() => {
      const useFetch = async() =>{
        try{
            const result = await getData();
            setData(result);
        }
        catch(error){
            console.log("No se pudo procesar la solicitud" + error);
        }
      }
      useFetch();
    }, [])
  
    return (
    <div className="container ">

        <h1 className="text-center my-4">ListTask Basic</h1>

        <SeeData data={ data }/>

    </div>

  )
}
