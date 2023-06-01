import React from "react";

import './home.css'

// firebase imports
import { useCollection } from "../hooks/useCollection";
import Map from "../components/Map";



const Home = () => {
  const { documents: drivers } = useCollection("drivers");

  return (
    <div className="home" >
      <Map/>
    </div>
  );
};

export default Home;


// import { doc, deleteDoc } from "firebase/firestore";
// const handleClick = async(id) => {
//   const ref = doc(db, "drivers", id);
//   await deleteDoc(ref)
// };