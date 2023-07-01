import React from 'react';

const gap = -2
const match = 1
const mismatch = -1


const Matrix = ({ sequence1, sequence2 }) => {
    console.log(sequence1, sequence2)
    const matrix = []
    for (let i = 0; i < sequence1.length + 1; i++) {
        matrix.push([])
        for (let j = 0; j < sequence2.length + 1; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < sequence1.length + 1; i++) {
        matrix[i][0] = i * gap
    }
    for (let j = 0; j < sequence2.length + 1; j++) {
        matrix[0][j] = j * gap
    }
    for (let i = 1; i < sequence1.length + 1; i++) {
        for (let j = 1; j < sequence2.length + 1; j++) {
            if (sequence1[i - 1] === sequence2[j - 1]) {
                matrix[i][j] = Math.max(
                    matrix[i - 1][j - 1] + match,
                    matrix[i - 1][j] + gap,
                    matrix[i][j - 1] + gap
                )
            } else {
                matrix[i][j] = Math.max(
                    matrix[i - 1][j - 1] + mismatch,
                    matrix[i - 1][j] + gap,
                    matrix[i][j - 1] + gap
                )
            }
        }
    }
    return (
        <table>
            <tbody>
            {matrix.map((row, rowIndex) => (
                <tr key={rowIndex}>
                    {row.map((cell, columnIndex) => (
                        <td className="border border-black w-32 h-32" key={columnIndex}>
                            <div className="flex flex-wrap justify-center">
                                {cell}
                            </div>
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default Matrix;
