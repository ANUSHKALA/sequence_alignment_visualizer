import React,{useState, useEffect} from 'react';
import MatrixVisual from '../matrixVisual';

export default function Needleman({sequenceA, sequenceB}) {
   //Needleman Wunsch Visual

   const [matrix, setMatrix] = useState( [
    [0, -1, -2, -3, -4],
    [-1, 0, 0, 0, 0],
    [-2, 0, 0, 0, 0],
    [-3, 0, 0, 0, 0],
    [-4, 0, 0, 0, 0]
  ]);
  // const [arrowMatrix, setArrowMatrix] = useState([]);


   const matrixTest = [
       [0, -1, -2, -3, -4],
       [-1, 0, 0, 0, 0],
       [-2, 0, 0, 0, 0],
       [-3, 0, 0, 0, 0],
       [-4, 0, 0, 0, 0]
     ];

     useEffect(() => {
       // Initialize the matrix and other necessary variables
       const initialMatrix = initializeMatrix(sequenceA, sequenceB);
       setMatrix(initialMatrix);
      //  setArrowMatrix(generateInitialArrowMatrix(initialMatrix));
   
       // Run the algorithm step-by-step
       const timer = setInterval(runAlgorithmStep, 5000); 
   
       // Clean up the timer when the component unmounts or the sequences change
       return () => clearInterval(timer);
     }, [sequenceA, sequenceB]);

     const initializeMatrix = (sequenceA, sequenceB) => {
       const m = sequenceA.length;
       const n = sequenceB.length;
       
       // Define the gap penalty
       const gapPenalty = -1;
       
       // Initialize an empty matrix
       const matrix = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
       
       // Initialize the first row and column with gap penalties
       for (let i = 1; i <= m; i++) {
         matrix[i][0] = i * gapPenalty;
       }
       
       for (let j = 1; j <= n; j++) {
         matrix[0][j] = j * gapPenalty;
       }
       
       // Return the initial matrix state
       console.log("the matrix is goin ti be init",matrix);
       return matrix;
     };

     const generateInitialArrowMatrix = (matrix) => {
      const numRows = matrix.length;
      const numCols = matrix[0].length;
      const arrowMatrix = Array(numRows).fill(null).map(() => Array(numCols).fill(false));
    
      for (let i = 1; i < numRows; i++) {
        for (let j = 1; j < numCols; j++) {
          const score = matrix[i][j];
          const maxNeighborScore = Math.max(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]);
    
          if (score === maxNeighborScore) {
            arrowMatrix[i][j] = true;
          }
        }
      }
    
      return arrowMatrix;
    };
    
   
    const runAlgorithmStep = () => {
      // Get a copy of the current matrix and arrowMatrix
      const newMatrix = [...matrix];
      // const newArrowMatrix = [...arrowMatrix];
    
      // Define the scoring rules
      const matchScore = 2;
      const mismatchScore = -1;
      const gapPenalty = -1;
    
      // Update a portion of the matrix and arrows
      // For example, let's update the cell at row i, column j
      const i = 1;
      const j = 1;
    
      // Calculate the scores for the three possible options:
      const diagonalScore = matrix[i - 1][j - 1] + (sequenceA[i - 1] === sequenceB[j - 1] ? matchScore : mismatchScore);
      const leftScore = matrix[i][j - 1] + gapPenalty;
      const topScore = matrix[i - 1][j] + gapPenalty;
    
      // Determine the maximum score among the three options
      const maxScore = Math.max(diagonalScore, leftScore, topScore);
    
      // Update the cell with the maximum score
      newMatrix[i][j] = maxScore;
    
      // Update the arrowMatrix based on the updated score
      // newArrowMatrix[i][j] = (maxScore === diagonalScore);
    
      // Update the matrix and arrowMatrix state
      setMatrix(newMatrix);
      // setArrowMatrix(newArrowMatrix);
    };
    

     
 return (
   <div>
       {(matrix!=[0] || matrix!=[])&&<MatrixVisual matrix={matrix}/>}
   </div>
 )
}
