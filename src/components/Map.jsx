import * as React from "react";
import WorldMap from "react-svg-worldmap";

function Map(props) {
  const data = props.correct;
  return (
    <div className="App">
      <WorldMap
        className="map"
        color="#1dd8cc"
        value-suffix="people"
        size="lg"
        data={props.data}
      />
    </div>
  );
}

export default Map;
