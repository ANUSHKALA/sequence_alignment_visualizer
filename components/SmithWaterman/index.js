import React, { useState, useEffect } from "react";
import DisplayMatrix from "../displayMatrix";

export default function SmithWaterman({ sequenceA, sequenceB, config }) {
  //Smith–Waterman algorithm

  const { match, mismatch, gap } = config;

  const MATCH_SCORE = match === "" ? 0 : parseInt(match);
  const MISMATCH_SCORE = mismatch === "" ? 0 : parseInt(mismatch);
  const GAP_PENALTY = gap === "" ? 0 : parseInt(gap);

  const [matrix, setMatrix] = useState([]);
  const [comparisonSeq, setComparisonSeq] = useState({
    alignedSequenceA: sequenceA,
    alignedSequenceB: sequenceB,
  });

  useEffect(() => {
    const initialMatrix = initializeMatrix(sequenceA, sequenceB);
    setMatrix(initialMatrix);

    const finalMatrix = runAlgorithmStep(initialMatrix);
    setMatrix(finalMatrix);

    const { alignedSequenceA, alignedSequenceB } = tracebackAlignment(
      finalMatrix,
      sequenceA,
      sequenceB
    );
    setComparisonSeq({
      alignedSequenceA: alignedSequenceA,
      alignedSequenceB: alignedSequenceB,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sequenceA, sequenceB, config]);

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

  const tracebackAlignment = (matrix, sequenceA, sequenceB) => {
    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let maxScore = -Infinity;
    let maxI = numRows - 1;
    let maxJ = numCols - 1;
    
    for (let i = numRows - 1; i >= 0; i--) {
      for (let j = numCols - 1; j >= 0; j--) {
        if (matrix[i][j].value > maxScore) {
          maxScore = matrix[i][j].value;
          maxI = i;
          maxJ = j;
        }
      }
    }
  
    let i = maxI;
    let j = maxJ;
    let alignedSequenceA = "";
    let alignedSequenceB = "";
  
    while (i > 0 && j > 0 && matrix[i][j].value >= 0) {
      const currentCell = matrix[i][j];
      const currentArrow = currentCell.arrow[0];

      if (currentArrow === "diagonal") {
        alignedSequenceA = sequenceA[i - 1] + alignedSequenceA;
        alignedSequenceB = sequenceB[j - 1] + alignedSequenceB;
        i--;
        j--;
      } else if (currentArrow === "left") {
        alignedSequenceA = "-" + alignedSequenceA;
        alignedSequenceB = sequenceB[j - 1] + alignedSequenceB;
        j--;
      } else if (currentArrow === "top") {
        alignedSequenceA = sequenceA[i - 1] + alignedSequenceA;
        alignedSequenceB = "-" + alignedSequenceB;
        i--;
      }
    }

    return { alignedSequenceA, alignedSequenceB };
  };
  

  const runAlgorithmStep = (initialMatrix) => {
    const newMatrix = [...initialMatrix];

    for (let i = 1; i < newMatrix.length; i++) {
      for (let j = 1; j < newMatrix[0].length; j++) {
        const diagonalScore =
          newMatrix[i - 1][j - 1].value +
          (sequenceA[i - 1] === sequenceB[j - 1]
            ? MATCH_SCORE
            : MISMATCH_SCORE);
        const leftScore = newMatrix[i][j - 1].value + GAP_PENALTY;
        const topScore = newMatrix[i - 1][j].value + GAP_PENALTY;


        const scores = [
          { value: diagonalScore, arrow: "diagonal" },
          { value: leftScore, arrow: "left" },
          { value: topScore, arrow: "top" },
        ];
        const scoreValues = [diagonalScore, leftScore, topScore];

        const maxScore = Math.max(...scoreValues);

        newMatrix[i][j] = {
          value: maxScore <= 0 ? 0 : maxScore,
          arrow: scores
            .filter((score) => score.value === maxScore)
            .map((score) => score.arrow),
        };
      }
    }
    return newMatrix;
  };

  const seqAlign = (seqA, seqB) => {
    const m = seqA.length;
    const n = seqB.length;
    var alignChar = [];
    var firstFound = false
    for (let i=0; i<m; i++){
      if (seqA[i] === seqB[i] && firstFound === false){
        firstFound = true
        alignChar.push(
          <div
            className={`flex flex-col px-2 py-1 rounded-md mx-0.5 bg-red-400/90`}
          >
            <span>{seqA[i]}</span>
            <span>{seqB[i]}</span>
          </div>
        );
      }
      else if (seqA[i] === seqB[i] && firstFound === true){
        alignChar.push(
          <div
            className={`flex flex-col px-2 py-1 rounded-md mx-0.5 bg-red-400/90`}
          >
            <span>{seqA[i]}</span>
            <span>{seqB[i]}</span>
          </div>
        );
      }
      else if (seqA[i] !== seqB[i] && firstFound === true){
        alignChar.push(
          <div
            className={`flex flex-col px-2 py-1 rounded-md mx-0.5 `}
          >
            <span>{seqA[i]}</span>
            <span>{seqB[i]}</span>
          </div>
        );
      }
    }
    return <div className="flex flex-row">{...alignChar}</div>;
  };

  return (
    <div>
      {matrix.length > 0 && (
        <div>
          <DisplayMatrix
            matrix={matrix}
            sequence1={sequenceA.split("")}
            sequence2={sequenceB.split("")}
          />
        </div>
      )}
      <div className="flex justify-center mt-16 text-lg invert">
        <div className="flex justify-center items-center p-5">
          <h3 className="">Sequence Comparison</h3>
        </div>
        <div className="p-5 uppercase border border-black border-l-4 border-r-0 border-t-0 border-b-0">
          {seqAlign(
            comparisonSeq.alignedSequenceA,
            comparisonSeq.alignedSequenceB
          )}
        </div>
      </div>
    </div>
  );
}
