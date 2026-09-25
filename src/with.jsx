import { useEffect, useState } from "react";

function ScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        left: "10px",
        zIndex: 9999,
        padding: "5px 10px",
        background: "#0000003d",
        color: "#fff",
        borderRadius: "8px",
        fontSize: "20px",
      }}
    >
      {width}px
    </div>
  );
}

export default ScreenWidth;