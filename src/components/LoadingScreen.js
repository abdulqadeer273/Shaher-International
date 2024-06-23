import React from "react";

const LoadingScreen = () => {
  return (
    <div style={{ textAlign: "center", alignContent: "center",height:"100vh",backgroundColor:"CaptionText" }}>
        <img src={"/loading.gif"} style={{width:"100vw", height:"100vh"}}/>
    </div>
  );
};

export default LoadingScreen;
