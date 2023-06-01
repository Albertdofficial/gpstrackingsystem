import {useEffect, useState } from "react";
import {RT_database } from "../firebase/config";
import {ref, onValue } from "firebase/database";

const useFetch = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(RT_database);

    onValue(dataRef, (snapshot) => {
      const fetchedData = snapshot.val();
      setData(fetchedData);
    });
  }, []);

  return { data };
};

export default useFetch;
