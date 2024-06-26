import { Box } from '@mui/material';
import { Row } from '../Row';
import { JCalendar } from './JCalendar';
import { useState } from 'react';
import { addMonths, subMonths } from 'date-fns';

type Period = {
  from: Date | null;
  to: Date | null;
};

type Props = {
  isShow?: boolean;
  period: Period;
  setPeriod: (period: Period) => void;
};

const bgCOLOR = '#F5F5F5';

export const JDateRangePicker = ({
  isShow = true,
  period,
  setPeriod,
}: Props) => {
  const [positionDate, setPositionDate] = useState(new Date());

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const setDate = (date: Date) => {
    if (startDate && endDate) {
      setStartDate(date);
      setEndDate(null);
      return;
    }

    if (startDate && !endDate && date < startDate) {
      setStartDate(date);
      return;
    }

    if (startDate && !endDate && date > startDate) {
      setEndDate(date);
      return;
    }

    if (!startDate && !endDate) {
      setStartDate(date);
      return;
    }
  };

  if (!isShow) {
    return null;
  }
  return (
    <Row
      position={'absolute'}
      sx={{ backgroundColor: bgCOLOR }}
      alignItems={'flex-start'}
      padding={2}
      borderRadius={6}
      gap={2}
      zIndex={9999}
      boxShadow={10}
      top={44}
      right={0}
    >
      <JCalendar
        positionDate={positionDate}
        onPrev={setPositionDate}
        startDate={startDate}
        endDate={endDate}
        onHover={() => {}}
        onClick={setDate}
      />
      <Box width={2} height={300} sx={{ backgroundColor: '#E6E6E6' }} />
      <JCalendar
        positionDate={addMonths(positionDate, 1)}
        onNext={(date) => setPositionDate(subMonths(date, 1))}
        startDate={startDate}
        endDate={endDate}
        onHover={() => {}}
        onClick={setDate}
      />
    </Row>
  );
};
