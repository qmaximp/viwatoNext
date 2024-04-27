import React from "react";

const Wrapper = ({ children }) => {
  return (
    <div
      style={{
        width: "calc(100vw - 100px)",
        height: "100%",
        backgroundColor: "#fff",
        margin: "50px auto",
        borderRadius: "10px",
        maxWidth: "1400px",
        minWidth: "320px",
        padding: "15px 30px",
      }}>
      {children}
    </div>
  );
};

export default Wrapper;
