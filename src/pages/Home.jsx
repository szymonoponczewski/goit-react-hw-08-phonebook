import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";

const Home = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      overflow: "hidden",
    }}
  >
    <style>
      {`
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}
    </style>
    <p
      style={{
        fontSize: "60px",
        fontWeight: "bold",
        color: "#fff",
        animation: "fadeIn 4s ease infinite",
      }}
    >
      Welcome to <FaPhoneSquareAlt style={{ verticalAlign: "middle" }} />{" "}
      Phonebook!
    </p>
  </div>
);

export default Home;
