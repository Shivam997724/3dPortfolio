import React from "react";
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <span className="canvas-load"></span>
      <p
        style={{
          color: "white",
          fontSize: "14px",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(0)}%
      </p>
    </Html>
  );
};

export default Loader;
