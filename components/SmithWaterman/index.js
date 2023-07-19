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
    let i = matrix.length - 1;
    let j = matrix[0].length - 1;
    let alignedSequenceA = "";
    let alignedSequenceB = "";

    while (i > 0 && j > 0) {
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

    while (i > 0) {
      alignedSequenceA = sequenceA[i - 1] + alignedSequenceA;
      alignedSequenceB = "-" + alignedSequenceB;
      i--;
    }

    while (j > 0) {
      alignedSequenceA = "-" + alignedSequenceA;
      alignedSequenceB = sequenceB[j - 1] + alignedSequenceB;
      j--;
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

        // console.log(i,j,"diagonalScore",diagonalScore,"leftScore",leftScore,"topScore",topScore);

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
    for (let i = 0; i < m; i++) {
      const isSame = seqA[i] === seqB[i];
      const aligncell = (
        <div
          className={`flex flex-col px-2 py-1 rounded-md ${
            isSame ? "bg-green-300/40 " : ""
          }`}
        >
          <span>{seqA[i]}</span>
          <span>{seqB[i]}</span>
        </div>
      );
      alignChar.push(aligncell);
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
      <div className="flex justify-center mt-16 text-lg">
        <div className="flex justify-center items-center p-5">
          <h3 className="">Sequence Comparison</h3>
        </div>
        <div className="p-5 border border-black border-l-4 border-r-0 border-t-0 border-b-0">
          {seqAlign(
            comparisonSeq.alignedSequenceA,
            comparisonSeq.alignedSequenceB
          )}
        </div>
      </div>
    </div>
  );
}
