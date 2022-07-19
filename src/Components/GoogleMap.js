
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  GoogleMap,
  DrawingManager,
  LoadScript,
  Polygon
} from "@react-google-maps/api";



const LIBRARIES = ["drawing"];

function Google() {
  const [polygons, setPolygons] = useState([]);
  console.log({ polygons });
  return (
    <div>
      <button
        style={{
          position: "absolute",
          height:"50vh",
          zIndex: 100
        }}
        onClick={() => setPolygons(polygons.slice(0, -1))}
      >
        Undo
      </button>
      <LoadScript
        id="script-loader"
        // Cant find free google api
        // googleMapsApiKey={""}
        preventGoogleFontsLoading={true}
        language="en"
        region="US"
        libraries={LIBRARIES}
        version="3"
      >
        <GoogleMap
          id="drawing-example"
          mapContainerStyle={{ width: "400px", height: "300px" }}
          mapTypeId="roadmap"
          clickableIcons={false}
          options={{
            mapTypeControl: false,
            streetViewControl: false
          }}
          zoom={13}
          center={{
            lat: 44.9,
            lng: -93.3
          }}
        >
          <DrawingManager
            drawingMode={"polygon"}
            onPolygonComplete={polygon => {
              setPolygons([...polygons, polygon]);
              polygon.setMap(null);
            }}
          />

          {polygons.map((polygon, i) => (
            <Polygon path={polygon.getPath()} key={i} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Google />, rootElement);