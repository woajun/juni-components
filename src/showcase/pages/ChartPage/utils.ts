
type Point = {
    x: number;
    y: number;
  };
  
type LineOptions = {
distance: number;
gap: number;
color: string;
from: Point;
to: Point;
};

type TextOptions = {
color: string;
size: string;
font: string;
text: string;
position: Point;
};

type RectOptions = {
color: string;
startPoint: Point;
width: number;
height: number;
};

export const drawDashLine = (ctx: CanvasRenderingContext2D, options: LineOptions): void => {
const { distance, gap, color, from, to } = options;
ctx.setLineDash([distance, gap]);
ctx.strokeStyle = color;
ctx.beginPath();
ctx.moveTo(from.x, from.y);
ctx.lineTo(to.x, to.y);
ctx.stroke();
ctx.setLineDash([]);
};

export const drawText = (ctx: CanvasRenderingContext2D, options: TextOptions): void => {
const { color, size, font, text, position } = options;
ctx.fillStyle = color;
ctx.font = `${size} ${font}`;
ctx.fillText(text, position.x, position.y);
};

export const drawRect = (ctx: CanvasRenderingContext2D, options: RectOptions): void => {
const { color, startPoint, width, height } = options;
ctx.fillStyle = color;
ctx.fillRect(startPoint.x, startPoint.y, width, height);
};

export const createPainter = (ctx: CanvasRenderingContext2D) => ({
    dashLine: (options: LineOptions) => drawDashLine(ctx, options),
    text: (options: TextOptions) => drawText(ctx, options),
    rect: (options: RectOptions) => drawRect(ctx, options),
  });
  