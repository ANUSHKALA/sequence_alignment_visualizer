import React from "react";
import { BsArrowUpShort, BsArrowRight, BsArrowUpLeft, BsArrowLeftShort } from "react-icons/bs";

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
      case "diagonal":
        arrowIcon = <BsArrowUpLeft key={index} className="fill-black" />;
        break;
      case "left":
        arrowIcon = <BsArrowLeftShort key={index} className="fill-black" />;
        break;
      case "top":
        arrowIcon = <BsArrowUpShort key={index} className="fill-black" />;
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
    <td style={{ backgroundColor: color }} className="h-20 w-20 text-center">
      {arrowIcons}
      <span className="">

      {cell.value}
      </span>
    </td>
  );
};
