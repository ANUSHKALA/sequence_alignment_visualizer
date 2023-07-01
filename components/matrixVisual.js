import React, { useEffect, useRef } from 'react';

const MatrixVisual = ({ matrix, sequence1, sequence2}) => {
  const canvasRef = useRef(null);
  const cellSize = 75; 

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.height=(matrix.length + 1)*cellSize;
    canvas.width=(matrix[0].length + 1) *cellSize;
   
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.font = `22px Arial` 

    for (let i = 1; i < matrix[0].length -1; i++) {
      const cellX = (i + 1) * cellSize;
      const cellY = (cellSize / 2);
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'left';
      ctx.fillText(sequence1[i-1], cellX + cellSize / 2, cellY + cellSize / 2);
    }

    for (let i = 1; i < matrix.length -1; i++) {
      const cellX = cellSize / 2;
      const cellY = (i+ 1)* cellSize;
      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(sequence2[i-1], cellX + cellSize / 2, cellY + cellSize / 2);
    }

    ctx.font = `15px Arial` 
    for (let i = 1; i < matrix.length; i++) {
      for (let j = 1; j < matrix[i].length; j++) {
        const cellX = j * cellSize;
        const cellY = i * cellSize;
        const score = matrix[i-1][j-1];

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
    const minHue = 0; 
    const maxHue = 120;
    const normalizedScore = (score - minScore) / (maxScore - minScore);
    const hue = (1 - normalizedScore) * minHue + normalizedScore * maxHue;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return <canvas ref={canvasRef} />;
};

export default MatrixVisual;
