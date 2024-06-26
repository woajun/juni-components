/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonBase, SxProps, Typography } from '@mui/material';
import { format } from 'date-fns';
import { COLORS } from '../../core/COLORS';

type Props = {
  date: Date;
  onClick: (date: Date) => void;
  onHover: (date: Date) => void;
  isSameMonth: boolean;
  type?: 'none' | 'selected' | 'inPeriod';
};

const selectedSameMonthColor = COLORS.primary;
const selectedColor = COLORS.primary200;
const inPeriodColor = COLORS.primary100;
const inPeriodTextColor = COLORS.primary;
const inPeriodInSameMonthColor = COLORS.primary50;
const inPeriodInSameMonthTextColor = COLORS.primary200;
const bgCOLOR = '#F5F5F5';

export const Day = ({
  date,
  onClick,
  onHover,
  isSameMonth,
  type = 'none',
}: Props) => {
  let boxStyle: SxProps = {};

  if (isSameMonth) {
    boxStyle = {
      backgroundColor: 'white',
    };
  } else {
    boxStyle = {
      backgroundColor: 'transparent',
      color: '#BDBDBD',
    };
  }

  if (type === 'none' && isSameMonth) {
    boxStyle = {
      backgroundColor: 'White',
      borderRadius: 2,
      borderColor: bgCOLOR,
      borderWidth: 2,
      borderStyle: 'solid',
    }
  }

  if (type === 'selected' && isSameMonth) {
    boxStyle = {
      backgroundColor: selectedSameMonthColor,
      color: 'white',
      outlineWidth: 2,
      outlineColor: selectedSameMonthColor,
      outlineStyle: 'solid',
      borderRadius: 1,
      zIndex: 1,
    };
  }

  if (type === 'selected' && !isSameMonth) {
    boxStyle = {
      backgroundColor: selectedColor,
      color: 'white',
      outlineWidth: 2,
      outlineColor: selectedColor,
      outlineStyle: 'solid',
      borderRadius: 1,
      zIndex: 1,
    };
  }

  if (type === 'inPeriod' && isSameMonth) {
    boxStyle = {
      backgroundColor: inPeriodColor,
      color: inPeriodTextColor,
    };
  }

  if (type === 'inPeriod' && !isSameMonth) {
    boxStyle = {
      backgroundColor: inPeriodInSameMonthColor,
      color: inPeriodInSameMonthTextColor,
    };
  }

  return (
    <ButtonBase
      sx={[
        {
          width: 46,
          height: 38,
        },
        {
          ':hover': {
            backgroundColor: '#7FC9C1',
            color: 'white',
          },
        },
        boxStyle,
      ]}
      onClick={() => onClick(date)}
      onMouseOver={() => onHover(date)}
    >
      <Typography fontWeight={800} fontSize={16}>
        {format(date, 'd')}
      </Typography>
    </ButtonBase>
  );
};
