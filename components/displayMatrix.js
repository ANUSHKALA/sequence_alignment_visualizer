import React from "react";
import {FiArrowUpLeft, FiArrowUp, FiArrowLeft} from "react-icons/fi";

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
    <table className="mx-auto">
      <tbody>
        <th></th>
        {sequence1.map((letter, index) => {
          return <th key={index} className="py-1 text-xl">{letter}</th>;
        })}
        {matrix.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th className="px-3 text-xl">{sequence2[rowIndex]}</th>
            {row.map((cell, cellIndex) => {
              const color = getColorFromScore(cell.value);
              return <DisplayCell key={cellIndex} cell={cell} color={color} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
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
        arrowIcon = <FiArrowUp key={index} className="fill-black absolute top-0 left-1/3" size={22} />;
        break;
      case "diagonal":
        arrowIcon = <FiArrowUpLeft key={index} className="fill-black absolute top-0 left-0" size={22}/>;
        break;
      case "left":
        arrowIcon = <FiArrowLeft key={index} className="fill-black absolute top-1/3 left-0" size={22} />;
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
    <td style={{ backgroundColor: color }} className="relative h-20 w-20 text-center">
      <span className="z-10">
      {cell.value}
      </span>
      {arrowIcons}
    </td>
  );
};
