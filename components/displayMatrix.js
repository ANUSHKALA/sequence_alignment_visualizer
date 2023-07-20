import React, { useEffect, useState } from "react";
import { FiArrowUpLeft, FiArrowUp, FiArrowLeft } from "react-icons/fi";

const DisplayMatrix = ({ matrix, sequence1, sequence2 }) => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    setDisplay(true);
    console.log("Matrix: ", matrix);
    if (sequence1.length > 17 || sequence2.length > 17) {
      setDisplay(false);
    }
  }, [matrix, sequence1, sequence2]);

  const getColorFromScore = (score) => {
    const minScore = -25;
    const maxScore = 25;
    const minHue = 0;
    const maxHue = 900;
    const normalizedScore = (score - minScore) / (maxScore - minScore);
    const hue = (1 - normalizedScore) * minHue + normalizedScore * maxHue;
    return `hsl(${hue}, 100%, 50%)`;
  };

  sequence1 = [""].concat(sequence1);
  sequence2 = [""].concat(sequence2);

  return (
    <>
      {display ? (
        <table className="mx-auto">
          <tbody>
            <th></th>
            {sequence2.map((letter, index) => {
              return (
                <th key={index} className="py-1 text-xl invert uppercase">
                  {letter}
                </th>
              );
            })}
            {matrix.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <th className="px-3 text-xl invert uppercase">
                  {sequence1[rowIndex]}
                </th>
                {row.map((cell, cellIndex) => {
                  const color = getColorFromScore(cell.value);
                  return (
                    <DisplayCell key={cellIndex} cell={cell} color={color} />
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <>
          <div className="bg-gray-400/40 rounded-md max-w-xl p-4">
            As the sequences are too long, the matrix is not displayed. Please
            refer to the console for the matrix.
          </div>
        </>
      )}
    </>
  );
};

export default DisplayMatrix;

const DisplayCell = ({ cell, color }) => {
  let arrowIcons = [];

  const arrows = cell.arrow === null ? ["none"] : cell.arrow;

  arrows.forEach((arrow, index) => {
    let arrowIcon = null;

    switch (arrow) {
      case "top":
        arrowIcon = (
          <FiArrowUp
            key={index}
            className="fill-black absolute top-0 left-1/3"
            size={22}
          />
        );
        break;
      case "diagonal":
        arrowIcon = (
          <FiArrowUpLeft
            key={index}
            className="fill-black absolute top-0 left-0"
            size={22}
          />
        );
        break;
      case "left":
        arrowIcon = (
          <FiArrowLeft
            key={index}
            className="fill-black absolute top-1/3 left-0"
            size={22}
          />
        );
        break;
      case "none":
        arrowIcon = null;
        break;
      default:
        arrowIcon = null;
    }

    arrowIcons.push(arrowIcon);
  });

  return (
    <td
      style={{ backgroundColor: color }}
      className="relative h-20 w-20 text-center border border-black"
    >
      <span className="z-10">{cell.value}</span>
      {arrowIcons}
    </td>
  );
};
