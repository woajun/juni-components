/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";

type CardProps = {
  color: string;
  unmount: () => void;
  autoplayMs?: number;
  onClick?: (color: string) => void;
};

function Card({ color, unmount, autoplayMs, onClick }: CardProps) {
  const [position, setPosition] = useState({ x: 0, opacity: 1 });
  const cardRef = useRef<HTMLDivElement | null>(null);
  const startOffset = useRef(0);
  const speed = 0.3;

  // autoplay
  const autoplayIntervalId = useRef(-1);

  const startAutoplay = () => {
    if (!autoplayMs) return;
    autoplayIntervalId.current = setInterval(() => {
      swipeRight();
    }, autoplayMs);
  };

  const removeAutoplay = () => {
    clearInterval(autoplayIntervalId.current);
  };

  useEffect(() => {
    startAutoplay();
    return () => removeAutoplay();
  }, []);

  // flip
  const timeXArray = useRef<{ timestamp: number; x: number }[]>([]);

  const getFlipType = (
    x: number,
    second: number,
    standardDistance: number
  ): "leftFlip" | "rightFlip" | "noFlip" => {
    const targetTime = new Date().getTime() - second * 1000;
    const before = timeXArray.current.find((e) => e.timestamp >= targetTime);
    timeXArray.current = [];

    if (!before) return "noFlip";
    const distance = Math.abs(x - before.x);

    if (distance > standardDistance) {
      return x - before.x < 0 ? "leftFlip" : "rightFlip";
    }

    return "noFlip";
  };

  // swipe
  const swipeCancel = () => {
    setPosition({ opacity: 1, x: 0 });
    startAutoplay();
  };

  const swipeLeft = () => {
    const w = cardRef.current?.offsetWidth as number;
    setPosition({ opacity: 0, x: -w });
    setTimeout(unmount, speed * 1000);
  };

  const swipeRight = () => {
    const w = cardRef.current?.offsetWidth as number;
    setPosition({ opacity: 0, x: w });
    setTimeout(unmount, speed * 1000);
  };

  // common move
  const moveCard = (clientX: number) => {
    const x = -(startOffset.current - clientX);
    const el = cardRef.current as HTMLDivElement;

    const distance = Math.abs(x / el.offsetWidth);
    const opacity = 1 - distance;
    setPosition({ opacity, x });

    if (distance > 1) {
      unmount();
    }

    timeXArray.current.push({
      timestamp: new Date().getTime(),
      x: clientX,
    });
  };

  const moveEndCard = (clientX: number) => {
    const { offsetWidth } = cardRef.current as HTMLDivElement;
    const flipType = getFlipType(clientX, 0.1, 20);
    const isOverHalf = Math.abs(position.x) > offsetWidth / 2;

    if (flipType === "noFlip" && !isOverHalf) {
      swipeCancel();
      return;
    }

    if (flipType === "leftFlip") {
      swipeLeft();
      return;
    }

    if (flipType === "rightFlip") {
      swipeRight();
      return;
    }

    const isLeft = clientX < startOffset.current;
    if (isLeft) {
      swipeLeft();
    } else {
      swipeRight();
    }
  };

  // mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startOffset.current = e.touches[0].clientX;
    removeAutoplay();
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    moveCard(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    moveEndCard(e.changedTouches[0].clientX);
  };

  // pc
  const [isPcDragging, setIsPcDragging] = useState(false);
  const isMoved = useRef(false);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    startOffset.current = e.clientX;
    removeAutoplay();
    setIsPcDragging(true);
    isMoved.current = false;
  };

  const handleMouseMove = (e: MouseEvent) => {
    moveCard(e.clientX);
    isMoved.current = true;
  };

  const handleMouseUp = (e: MouseEvent) => {
    moveEndCard(e.clientX);
    setIsPcDragging(false);
  };

  useEffect(() => {
    if (isPcDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isPcDragging]);

  const isUnmount = position.opacity === 0;
  const isCancel = position.x === 0;
  const transition =
    isUnmount || isCancel
      ? `transform ${speed}s ease-out, opacity ${speed}s ease-out`
      : "";
  return (
    <div
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: color,
        opacity: position.opacity,
        transform: `translateX(${position.x}px)`,
        transition,
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onClick={() => {
        if (!isMoved.current && onClick) onClick(color);
      }}
    >
      {color}
    </div>
  );
}

export default Card;
