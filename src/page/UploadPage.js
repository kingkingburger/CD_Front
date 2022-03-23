import React, {useState, useEffect} from "react";
import Header from "../component/shared/Header";
import UploadContent from "../component/shared/UploadContent";

function UploadPage() {
    return (
      <div>
          <Header/>

          <UploadContent/>
      </div>
    );
}

export default UploadPage;