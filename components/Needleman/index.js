import React, { useState, useEffect } from "react";
import MatrixVisual from "../matrixVisual";
import DisplayMatrix from "../displayMatrix";

export default function Needleman({ sequenceA, sequenceB }) {
  //Needleman Wunsch Visual

  const MATCH_SCORE = 1;
  const MISMATCH_SCORE = -1;
  const GAP_PENALTY = -2;

  const [matrix, setMatrix] = useState([]);

  useEffect(() => {
    const initialMatrix = initializeMatrix(sequenceA, sequenceB);
    setMatrix(initialMatrix);

    const finalMatrix = runAlgorithmStep(initialMatrix);
    setMatrix(finalMatrix);

  }, [sequenceA, sequenceB]);

  const initializeMatrix = (sequenceA, sequenceB) => {
    const m = sequenceA.length ;
    const n = sequenceB.length ;

    const matrix = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      matrix[i][0] = i * GAP_PENALTY;
    }

    for (let j = 1; j <= n; j++) {
      matrix[0][j] = j * GAP_PENALTY;
    }
    return matrix;
  };

  const runAlgorithmStep = (initialMatrix) => {
    const newMatrix = [...initialMatrix];
    
    for (let i = 1; i < newMatrix.length; i++) {
      for (let j = 1; j < newMatrix[0].length; j++) {

        const diagonalScore = newMatrix[i - 1][j - 1] + (sequenceA[i - 1] === sequenceB[j - 1] ? MATCH_SCORE : MISMATCH_SCORE);
        const leftScore = newMatrix[i][j - 1] + GAP_PENALTY;
        const topScore = newMatrix[i - 1][j] + GAP_PENALTY;

        const scores = [diagonalScore, leftScore, topScore];
        const maxScore =  Math.max(...scores);
        console.log(i,j,"list",scores);
        console.log(maxScore);

        newMatrix[i][j] = maxScore;
      }
    }
    return newMatrix;
  };

  return (
    <div>
      {matrix.length > 0 &&  (
        <>
        
        <DisplayMatrix
          matrix={matrix}
          sequence1={sequenceA.split('')}
          sequence2={sequenceB.split('')}
        />
        <MatrixVisual
          matrix={matrix}
          sequence1={sequenceA.split('')}
          sequence2={sequenceB.split('')}
        />
        </>
      )}
    </div>
  );
}
