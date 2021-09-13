import React, {useState,useEffect} from 'react';
import axios from "axios";


const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function App(){
  const [data,setData] = useState([]);


const api =axios.create({baseURL:BASE_URL});
const preuzmiNovine=api.get("movie/upcoming",{params:{api_key}})

useEffect(() => {
  preuzmiNovine.then((res)=>{
    console.log(res)
    setData(res.data.results);
  });


}, []);

return(
<div className="App">
  <div className="App-header">
    <div className="mreza">
{
  
}      
    </div>
  </div>
</div>
)
}