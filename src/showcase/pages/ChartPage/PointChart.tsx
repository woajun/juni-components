import Chart from 'chart.js/auto';
import { useEffect, useRef } from 'react';
import { createPainter } from './utils';

const PRIMARY_COLOR = '#029283';
const GREY_COLOR = '#737373';
const LIGHT_GREY_COLOR = '#ccc';
const FONT_SM = '8px';
const FONT_MD = '12px';
const START_LABEL = '시작';
const END_LABEL = '종료';
const FONT_STYLE = 'ScoreDream';
const WEEK_LABEL = '주';
const standardBackgroundColor = '#c4e4e1';
const standardBorderColor = '#029283';
const standardMax = 30;
const standardMin = 20;
const unit = '주';
type Props = {
  data: number[];
};

const SummaryChart = ({
  data,
}: Props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  useEffect(() => {
    if (chartRef.current === null) return () => {};
    Chart.register();
    const aChart = new Chart(chartRef.current, {
      type: 'line',
      plugins: [{
        id: 'bgColorArea',
        beforeDraw(chart) {
          const { ctx, chartArea: { left, width, bottom, right }, scales: { y } } = chart;

          const endTop = y.getPixelForValue(standardMax);
          const endMid = y.getPixelForValue(standardMin);

          const painter = createPainter(ctx);

          // 기준값 배경 색상
          painter.rect({
            color: standardBackgroundColor,
            startPoint: { x: left, y: endTop },
            width,
            height: endMid - endTop,
          });

          // 기준값 윗 점선
          painter.dashLine({
            distance: 2,
            gap: 1,
            color: standardBorderColor,
            from: { x: left, y: endTop },
            to: { x: left + width, y: endTop },
          });

          // 기준값 윗 라벨
          painter.text({
            color: '#029283',
            size: '8px',
            font: 'SCoreDream',
            text: `${standardMax}${unit}`,
            position: { x: right - 23, y: endTop - 5 },
          });

          // 기준값 아랫 점선
          painter.dashLine({
            distance: 2,
            gap: 1,
            color: standardBorderColor,
            from: { x: left, y: endMid },
            to: { x: left + width, y: endMid },
          });

          // 기준값 아랫 라벨
          painter.text({
            color: '#029283',
            size: '8px',
            font: 'SCoreDream',
            text: `${standardMin}${unit}`,
            position: { x: right - 23, y: endMid + 15 },
          });

          chart.data.datasets.forEach((dataset) => {
            const meta = chart.getDatasetMeta(chart.data.datasets.indexOf(dataset));
            const points = meta.data;

            points.forEach((point, i) => {
              const value = data[i];
              const isStart = i === 0;
              const isLast = i === points.length - 1;
              const pointLabelPosition = { x: point.x, y: point.y - 5 };
              const labelPosition = { x: point.x, y: 10 };
              let labelText = '';

              if (isStart) {
                labelPosition.x -= 3;
                labelText = START_LABEL;
              } else if (isLast) {
                pointLabelPosition.x -= 15;
                labelPosition.x -= 13;
                labelText = END_LABEL;
              } else {
                labelPosition.x -= 8;
                labelText = i + WEEK_LABEL;
              }

              if (value !== 0) {
                painter.text({
                  color: PRIMARY_COLOR,
                  font: FONT_STYLE,
                  position: pointLabelPosition,
                  size: FONT_MD,
                  text: `${value}`,
                });
              }

              painter.dashLine({
                distance: 1,
                gap: 2,
                color: LIGHT_GREY_COLOR,
                from: { x: point.x, y: 13 },
                to: { x: point.x, y: bottom },
              });

              painter.text({
                color: GREY_COLOR,
                size: FONT_SM,
                font: FONT_STYLE,
                text: labelText,
                position: labelPosition,
              });
            });
          });
        },
      }],
      data: {
        labels: data,
        datasets: [{
          data,
          backgroundColor: data.map((value) => {
            if (value === 0) {
              return LIGHT_GREY_COLOR;
            }
            return PRIMARY_COLOR;
          }),
          borderColor: LIGHT_GREY_COLOR,
          borderWidth: 1,
          pointBorderWidth: 0,
        },
        ],
      },
      options: {
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            display: false,
            suggestedMin: 0,
            max: 60,
          },
          x: {
            display: false,
            grid: {
              display: false,
            },
            border: {
              display: false,
            },
          },
        },
      },
    });
    return () => {
      aChart.destroy();
    };
  }, [data]);

  return (
    <canvas ref={chartRef} height={100} />
  );
};

export default SummaryChart;
