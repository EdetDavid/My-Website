import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { motion } from "framer-motion";

const MyChartComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    // Create a modern gradient for the bars
    const height = 360;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#60a5fa"); // sky blue
    gradient.addColorStop(0.6, "#7c3aed"); // violet
    gradient.addColorStop(1, "#3b82f6"); // deep blue

    Chart.defaults.color = "#cbd5e1"; // light text color

    const labels = [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "React Native",
      "Python",
      "Django",
      "PostgreSQL",
      "WordPress",
    ];

    const dataValues = [5, 5, 4, 5, 4, 4, 5, 4, 4];

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels,
        datasets: [
          {
            label: "Skill level",
            data: dataValues,
            backgroundColor: gradient,
            borderRadius: 12,
            borderSkipped: false,
            barThickness: 22,
            maxBarThickness: 28,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: "rgba(2,6,23,0.95)",
            titleColor: "#fff",
            bodyColor: "#cbd5e1",
            padding: 10,
            displayColors: false,
          },
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { color: "#cbd5e1" },
          },
          y: {
            beginAtZero: true,
            max: 5,
            ticks: { stepSize: 1, color: "#cbd5e1" },
            grid: { color: "rgba(203,213,225,0.06)" },
          },
        },
        animation: { duration: 900, easing: "easeOutQuart" },
      },
    });

    // Cleanup
    return () => chart.destroy();
  }, []);

  return (
    <motion.section
      className="d-flex justify-content-center align-items-center my-5"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container">
        <div
          className="chart bg-dark"
          style={{ width: "100%", maxWidth: 820, height: 360, margin: "0 auto" }}
        >
          <canvas ref={canvasRef} />
        </div>
      </div>
    </motion.section>
  );
};

export default MyChartComponent;
