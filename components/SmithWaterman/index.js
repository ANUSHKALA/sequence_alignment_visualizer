import React, { useState, useEffect } from "react";
import DisplayMatrix from "../displayMatrix";

export default function SmithWaterman({ sequenceA, sequenceB }) {
  //Smith–Waterman algorithm

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
    const m = sequenceA.length;
    const n = sequenceB.length;

    const matrix = Array(m + 1)
      .fill(null)
      .map(() => Array(n + 1).fill({ value: 0, arrow: null }));

    for (let i = 1; i <= m; i++) {
      matrix[i][0] = { value: 0, arrow: null };
    }

    for (let j = 1; j <= n; j++) {
      matrix[0][j] = { value: 0, arrow: null };
    }
    return matrix;
  };

  const runAlgorithmStep = (initialMatrix) => {
    const newMatrix = [...initialMatrix];

    for (let i = 1; i < newMatrix.length; i++) {
      for (let j = 1; j < newMatrix[0].length; j++) {
        const diagonalScore = newMatrix[i - 1][j - 1].value + (sequenceA[i - 1] === sequenceB[j - 1] ? MATCH_SCORE : MISMATCH_SCORE);
        const leftScore = newMatrix[i][j - 1].value + GAP_PENALTY;
        const topScore = newMatrix[i - 1][j].value + GAP_PENALTY;

        // console.log(i,j,"diagonalScore",diagonalScore,"leftScore",leftScore,"topScore",topScore);

        const scores = [
          { value: diagonalScore, arrow: "diagonal" },
          { value: leftScore, arrow: "left" },
          { value: topScore, arrow: "top" }
        ];
        const scoreValues = [diagonalScore, leftScore, topScore];

        const maxScore = Math.max(...scoreValues);

        newMatrix[i][j] = {
          value: maxScore<=0 ? 0 : maxScore,
          arrow: scores.filter((score) => score.value === maxScore).map((score) => score.arrow),
        };
      }
    }
    return newMatrix;
  };

  return (
    <div>
      {matrix.length > 0 &&  (
        <div>
        
        <DisplayMatrix
          matrix={matrix}
          sequence1={sequenceA.split('')}
          sequence2={sequenceB.split('')}
        />
        </div>
      )}
    </div>
  );
}
