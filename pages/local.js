import React from 'react';
import MatrixVisual from '../components/matrixVisual';

const Local = () => {
    const matrix = [
        [0, -1, -2, -3, -4],
        [-1, 0, 0, 0, 0],
        [-2, 0, 0, 0, 0],
        [-3, 0, 0, 0, 0],
        [-4, 0, 0, 0, 0]
      ];
      
  return (
    <div>
        <MatrixVisual matrix={matrix} />
    </div>
  )
}

export default Local;