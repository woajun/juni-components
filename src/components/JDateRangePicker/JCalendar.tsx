import { Box, IconButton, Stack, Typography } from '@mui/material';
import { Row } from '../Row';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
  subMonths,
} from 'date-fns';
import { useMemo } from 'react';
import { Day } from './Day';

type Props = {
  positionDate: Date;
  onPrev?: (prevMonth: Date) => void;
  onNext?: (nextMonth: Date) => void;
  startDate: Date | null;
  endDate: Date | null;
  onClick: (date: Date) => void;
  onHover: (date: Date) => void;
};

export const JCalendar = ({
  positionDate,
  onPrev,
  onNext,
  startDate,
  endDate,
  onClick,
  onHover,
}: Props) => {
  const getDayType = (day: Date): 'selected' | 'none' | 'inPeriod' => {
    if (startDate && isSameDay(day, startDate)) {
      return  'selected';
    }
    if (endDate && isSameDay(day, endDate)) {
      return  'selected';
    }
    if (startDate && endDate && day < endDate && day > startDate) {
      return 'inPeriod';
    }
    return 'none';
  }

  const weeks = useMemo(() => {
    const monthStartDate = startOfWeek(startOfMonth(positionDate));
    const monthEndDate = endOfWeek(endOfMonth(positionDate));
    const days = eachDayOfInterval({
      start: monthStartDate,
      end: monthEndDate,
    });
    const getWeeks = (days: Date[]) => {
      const weeks = [];
      for (let i = 0; i < days.length; i += 7) {
        weeks.push(days.slice(i, i + 7));
      }
      return weeks;
    };

    return getWeeks(days);
  }, [positionDate]);
  return (
    <Stack>
      <Row justifyContent={'space-between'}>
        <Box flex={1}>
          {onPrev && (
            <IconButton
              onClick={() => onPrev(subMonths(positionDate, 1))}
              sx={{ backgroundColor: 'white' }}
            >
              <ArrowBackIos />
            </IconButton>
          )}
        </Box>
        <Row flex={1} gap={1}>
          <Box
            sx={{
              backgroundColor: 'white',
              paddingX: 2,
              paddingY: 1,
              borderRadius: 2,
            }}
            boxShadow={1}
          >
            <Typography fontWeight={800} fontSize={18}>
              {positionDate.getFullYear()}
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: 'white',
              paddingX: 2,
              paddingY: 1,
              borderRadius: 2,
            }}
            boxShadow={1}
          >
            <Typography fontWeight={800} fontSize={18}>
              {positionDate.getMonth() + 1}
            </Typography>
          </Box>
        </Row>
        <Row flex={1} justifyContent={'flex-end'}>
          {onNext && (
            <IconButton
              onClick={() => onNext(addMonths(positionDate, 1))}
              sx={{ backgroundColor: 'white' }}
            >
              <ArrowForwardIos />
            </IconButton>
          )}
        </Row>
      </Row>
      <Row paddingY={2}>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <Row flex={1} key={day}>
            <Typography fontWeight={800} fontSize={16}>
              {day}
            </Typography>
          </Row>
        ))}
      </Row>
      <Stack gap={0.5}>
        {weeks.map((week, index) => (
          <Row key={index}>
            {week.map((date, dayIndex) => (
              <Day
                key={dayIndex}
                date={date}
                onClick={onClick}
                onHover={onHover}
                isSameMonth={isSameMonth(date, positionDate)}
                type={getDayType(date)}
              />
            ))}
          </Row>
        ))}
      </Stack>
    </Stack>
  );
};
