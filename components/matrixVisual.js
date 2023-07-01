import React, { useEffect, useRef } from 'react';

const MatrixVisual = ({ matrix}) => {
  const canvasRef = useRef(null);
  const cellSize = 50; // Adjust this value based on your preference

  useEffect(() => {
    console.log("Matrix visual for: ", matrix);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.height=matrix.length*cellSize;
    canvas.width=matrix[0].length*cellSize;
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw matrix
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        const cellX = j * cellSize;
        const cellY = i * cellSize;
        const score = matrix[i][j];

        // Fill cell color based on score
        const color = getColorFromScore(score);
        ctx.fillStyle = color;
        ctx.fillRect(cellX, cellY, cellSize, cellSize);

        // Draw score text in the center of the cell
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(score.toString(), cellX + cellSize / 2, cellY + cellSize / 2);
      }
    }

    // // Draw arrows (example for Needleman-Wunsch traceback)
    // for (let i = 1; i < arrowMatrix.length; i++) {
    //   for (let j = 1; j < arrowMatrix[i].length; j++) {
    //     if (arrowMatrix[i][j]) {
    //       const cellX = j * cellSize;
    //       const cellY = i * cellSize;

    //       // Draw arrow from current cell to highest-scoring neighbor
    //       ctx.beginPath();
    //       ctx.moveTo(cellX + cellSize / 6, cellY + cellSize / 6);
    //       ctx.lineTo(cellX + cellSize / 6, cellY - cellSize / 6);
    //       ctx.lineTo(cellX - cellSize / 6, cellY + cellSize / 6);
    //       ctx.closePath();
    //       ctx.fillStyle = 'black';
    //       ctx.fill();
    //     }
    //   }
    // }
  }, [matrix]);

  const getColorFromScore = (score) => {

    const minScore = -10;
    const maxScore = 10;
    const minHue = 0; // Adjust hue values as per your color scheme
    const maxHue = 120;
    const normalizedScore = (score - minScore) / (maxScore - minScore);
    const hue = (1 - normalizedScore) * minHue + normalizedScore * maxHue;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return <canvas ref={canvasRef} />;
};

export default MatrixVisual;
