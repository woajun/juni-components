/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import Card from "./Card";

type Props = {
  autoplayMs?: number;
  colors: string[];
  height: number;
  width: number;
  onClick?: (color: string) => void;
};
function CardBundle({ autoplayMs, colors, height, width, onClick }: Props) {
  const [idx, setIdx] = useState(0);

  const nextIdx = (idx + 1) % colors.length;
  const currentColor = colors[idx];
  const nextColor = colors[nextIdx];

  const next = () => {
    setIdx(nextIdx);
  };
  return (
    <div className="card-wrapper" style={{ height, width }}>
      <Card
        key={currentColor}
        color={currentColor}
        unmount={next}
        autoplayMs={autoplayMs}
        onClick={onClick}
      />
      <div className="card next" style={{ backgroundColor: nextColor }}>
        {nextColor}
      </div>
    </div>
  );
}

export default CardBundle;
