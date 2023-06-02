"use client";
import { useEffect } from "react";
import styles from "./birthdat-chips.module.css";

const BirthdayChips = () => {
  useEffect(() => {
    const numChips = 50; // Number of chips to scatter
    const container = document.getElementById("chip-container");

    // Function to generate a random position
    const getRandomPosition = () => {
      const maxWidth = window.innerWidth - 100; // Adjust based on chip size
      const maxHeight = window.innerHeight - 100; // Adjust based on chip size
      const posX = Math.floor(Math.random() * maxWidth);
      const posY = Math.floor(Math.random() * maxHeight);
      return { x: posX, y: posY };
    };

    // Function to generate a random number within a range
    const getRandomNumber = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    // Function to generate a random color
    const getRandomColor = () => {
      const letters = "0123456789ABCDEF";
      let color = "#";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    // Create and position the chips with random colors
    for (let i = 0; i < numChips; i++) {
      const chip = document.createElement("div");
      chip.classList.add(styles["birthday-chip"]);
      const { x, y } = getRandomPosition();
      const color = getRandomColor();
      chip.style.left = `${x}px`;
      chip.style.top = `${y}px`;
      chip.style.backgroundColor = color;
      const rotation = getRandomNumber(-180, 180);
      const scale = getRandomNumber(0.5, 1);
      const opacity = getRandomNumber(0.5, 1);
      chip.style.left = `${x}px`;
      chip.style.top = `${y}px`;
      chip.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      chip.style.opacity = `${opacity}`;
      //   @ts-ignore
      container.appendChild(chip);
    }

    return () => {
      //   @ts-ignore
      container.innerHTML = ""; // Clean up the chips when component unmounts
    };
  }, []);

  return <div id="chip-container" className={styles["chip-container"]}></div>;
};

export default BirthdayChips;
