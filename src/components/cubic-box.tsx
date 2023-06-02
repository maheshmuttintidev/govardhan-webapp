"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const CubicBox = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prevPhoto) => (prevPhoto + 1) % 6);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="cubic-box">
      {Array.from({ length: 6 }).map((_, index) => (
        <Image
          width={100}
          height={150}
          key={index}
          src={`/govardhan/${index + 1}.jpeg`}
          alt={`Photo ${index + 1}`}
          className={`cubic-box__photo ${
            currentPhoto === index ? "active" : ""
          }`}
        />
      ))}
    </div>
  );
};

export default CubicBox;
