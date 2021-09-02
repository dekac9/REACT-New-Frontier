import React from "react";
import Header from "./comp/Header";
import Sekcija from "./comp/Sekcija";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Header
        ime={data.info.name}
        prezime={data.info.surname}
        zemlja={data.info.adress.country}
        grad={data.info.adress.city} 
        ulica={data.info.adress.street}
        broj={data.info.adress.number}
      ></Header>
      <Sekcija articles={data.education} name={"education"}></Sekcija>
      <Sekcija articles={data.projects} name={"projects"}></Sekcija>
    </div>
  );
}

export default App;
 