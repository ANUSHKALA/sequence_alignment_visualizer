import React from "react";

const DisplayMatrix = ({ matrix, sequence1, sequence2 }) => {
  const getColorFromScore = (score) => {
    const minScore = -10;
    const maxScore = 10;
    const minHue = 0;
    const maxHue = 120;
    const normalizedScore = (score - minScore) / (maxScore - minScore);
    const hue = (1 - normalizedScore) * minHue + normalizedScore * maxHue;
    return `hsl(${hue}, 100%, 50%)`;
  };

  sequence1 = [""].concat(sequence1);
  sequence2 = [""].concat(sequence2);

  return (
    <table>
      <tbody>
        <th></th>
        {sequence1.map((letter, index) => {
          return <th key={index}>{letter}</th>;
        })}
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{sequence2[rowIndex]}</th>
            {row.map((score, colIndex) => {
              const color = getColorFromScore(score);
              return (
                <td
                  key={colIndex}
                  style={{ backgroundColor: color }}
                  className="px-8 py-7"
                >
                  {score}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DisplayMatrix;
