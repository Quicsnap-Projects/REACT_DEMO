import "./UploadImage.css";

import React from "react";
import MultipleImageUpload from "./MultipleImageUpload";
import SingleImageUpload from "./SingleImageUpload";
import IterateUplaod from "./IterateUplaod";

function App() {
  return (
    <div className="container">
      <div className="App">

        <MultipleImageUpload/>  
        {/* <SingleImageUpload /> */}
        {/* <IterateUplaod /> */}
      </div>
    </div>
  );
}

export default App;
