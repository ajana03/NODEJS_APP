import React from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override = {
  display: "block",
  margin: "100px auto",
};
// const override = {
//   position: "absolute",
//   top: "300px",
//   left: "400px",
// };

export default function Spinner({ loading }) {
  return (
    <div className="absolute top-40 left-40">
      <FadeLoader
        color="#a0c2e4"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    </div>
  );
}
