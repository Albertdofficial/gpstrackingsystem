import React, {useState, useEffect} from "react";
import GoogleMapReact from "google-map-react";
import useFetch from '../hooks/useFetch'

// key: "AIzaSyAjVNuIgBhmBadmh7m8BcH0SMYVGV4wIdU" 


// functional component BusMarker displays an image of a bus icon
const BusMarker = () => <img style={{width:"100px", }} src="/bau-bus-icon.png" alt="Bus Marker" />

const Map = (props) => {
  
  // fetch GPS Data from Firebase Realtime Database
  const{data} = useFetch()
  let lng, lat

  useEffect(()=>{
    if(data){
      lat = data.LAT
      lng =  data.LNG

      console.log("Coordinates changed");

      console.log(lat, lng)

      setCenter({lat, lng})
    }

  }, [data])

  const [center, setCenter] = useState({ lat:35.2097, lng:33.3783 }); // location

  const onMapClick = ({x, y, lat, lng, event}) => {
    console.log("You clicked the map at", lat, lng);
  };

  return (
    <div style={{ height: "100vh", width: "100%", margin: "1px auto" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAjVNuIgBhmBadmh7m8BcH0SMYVGV4wIdU' }}
        defaultCenter={center}
        defaultZoom={12}
        onClick={onMapClick}
      >
        <BusMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
