import { useState } from 'react';
import Card from './Card';
import { StyledCardBundle } from './style';

type Props = {
  autoplayMs?: number;
  colors: string[];
  height: number;
  width: number;
  onClick?: (color: string) => void;
};
const CardBundle = ({ autoplayMs, colors, height, width, onClick }: Props) => {
  const [idx, setIdx] = useState(0);

  const nextIdx = (idx + 1) % colors.length;
  const currentColor = colors[idx];
  const nextColor = colors[nextIdx];

  const next = () => {
    setIdx(nextIdx);
  };
  return (
    <StyledCardBundle className="card-bundle" style={{ height, width }}>
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
    </StyledCardBundle>
  );
};

export default CardBundle;
