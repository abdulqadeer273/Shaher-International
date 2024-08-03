import React from "react";

const FirstBanner = () => {
  return (
    <div
      style={{
        background: "#F0F5F9",
        alignItems: "center",
        textAlign: "center",
        paddingBottom: "2rem",
        paddingTop: "2rem",
      }}
    >
      <p style={{ fontWeight: "bold" }}>
        Worked with leading industries and founders
      </p>
      <div className="d-flex justify-content-evenly">
        <img
          className="f-banner-image-1"
          src={
            "https://cdn.icon-icons.com/icons2/2845/PNG/512/ikea_logo_icon_181297.png"
          }
        />
        <img
          className="mt-4 f-banner-image-2"
          src={"https://simpleicon.com/wp-content/uploads/yahoo1.png"}
         />
        <img
          className="mt-4 f-banner-image-3"
          src={"https://www.svgrepo.com/show/50809/google.svg"}
        />
        <img
          className="mt-4 f-banner-image-4"
          src={
            "https://static-00.iconduck.com/assets.00/godaddy-icon-512x456-pjakb0ub.png"
          }
         />
      </div>
    </div>
  );
};

export default FirstBanner;
