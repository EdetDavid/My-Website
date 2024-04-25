import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const MyChartComponent = () => {
  useEffect(() => {
    const myChart = document.getElementById("barchart");

    Chart.defaults.color = "#ffffff";

    const chart = new Chart(myChart, {
      type: "bar",
      data: {
        labels: [
          "Html5",
          "CSS3",
          "Javascript",
          "Python",
          "Django",
          "Django-Rest",
          "Wordpress",
        ],
        datasets: [
          {
            label: " My Skills ",
            data: [5, 5, 4, 4, 5, 3, 5],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
              "rgba(54, 162, 235, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
              "rgba(54, 162, 235, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      // Cleanup to avoid memory leaks
      chart.destroy();
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <section className="d-flex justify-content-center align-items-center my-5">
      <div className="container" data-aos="fade-up" data-aos-duration="3000">
        <div className="chart bg-dark" style={{ width: '700px', margin: '0 auto' }}>
          <canvas id="barchart"></canvas>
        </div>
      </div>
    </section>
  );
};

export default MyChartComponent;
