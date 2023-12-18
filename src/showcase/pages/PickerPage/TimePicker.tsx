import { useState } from 'react';
import styled from 'styled-components';
import Picker from '../../../components/Picker';

const generateNumbers = (min: number, max: number): string[] => {
    const numbers: string[] = [];
  
    // 주어진 범위 내의 각 숫자를 형식에 맞게 배열에 추가
    for (let i = min; i < max + 1; i++) {
      const formattedNumber = i < 10 ? `0${i}` : `${i}`;
      numbers.push(formattedNumber);
    }
  
    return numbers;
  };
  
export const StyledAlarmPicker = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  .alarm-time-set {
    width: 200px;
    height: 130px;
    display: flex;
    align-items: center;
    .alarm-set-item {
      font-weight: 300;
      color: #ccc;
      flex-grow: 1;
    }
    .time-divider {
      font-weight: bold;
      font-size: 30px;
      height: 53px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #9e9e9e;
      border-top: 1px solid #ececec;
      border-bottom: 1px solid #ececec;
    }
  }
  .alarm-switch-set {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .alarm-switch-item {
      height: 48px;
      border: 1px solid #d1d1d1;
      border-radius: 10px;
      padding: 0 13px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      &.on {
        border-color: #029283;
        .alarm-switch-time-set,
        .alarm-label {
          font-weight: bold;
          color: #029283;
        }
      }
      .alarm-switch-time-set {
        display: flex;
        align-items: center;
        gap: 6px;
        .alarm-ampm {
          font-size: 14px;
        }
        .alarm-time {
          font-weight: bold;
          letter-spacing: 3px;
        }
      }
    }
  }
`;

const renderOptions = (options: string[], active: boolean) => options.map((option) => (
  <Picker.Item key={option} value={option}>
    {({ selected }) => (
      <div
        className={
            (selected
              ? 'font-semibold text-[#029283] text-[30px]'
              : 'text-[#cccccc], text-[20px]')
              + (active ? '' : ' text-gray-300')
          }
      >
        {option}
      </div>
    )}
  </Picker.Item>
));

type Props = {
  handleValueChange: (val: string) => void
  value: string
};

const TimePicker = ({ handleValueChange, value }: Props) => {
  const parts = ['오전', '오후'];
  const hours = generateNumbers(0, 11);
  const minutes = generateNumbers(0, 59);

  type Val = {
    val1: string
    val2: string
    val3: string
  };

  const val: Val = value ? JSON.parse(value) : {
    val1: '오전',
    val2: '07',
    val3: '30',
  };
  const setVal = (newValue: Val) => {
    handleValueChange(JSON.stringify(newValue));
  };

  const [active, setActive] = useState(value !== '');
  const handleClick = () => {
    if (!active) {
      setVal(val);
      setActive(true);
    }
  };

  return (
    <div className={`border-2 rounded-lg shadow-md mt-5 p-3 ${active ? '' : 'bg-gray-100 text-gray-400'}`} onClick={handleClick}>
      <StyledAlarmPicker>
        <div className={`alarm-time-set ${active ? '' : 'pointer-events-none'}`}>
          <div className="alarm-set-item">
            <Picker
              value={val}
              onChange={({ val1 }) => setVal({ ...val, val1 })}
              wheelMode="natural"
            >
              <Picker.Column name="val1">
                { renderOptions(parts, active)}
              </Picker.Column>
            </Picker>
          </div>
          <div className="alarm-set-item">
            <Picker
              value={val}
              onChange={({ val2 }) => setVal({ ...val, val2 })}
              wheelMode="natural"
            >
              <Picker.Column name="val2">
                { renderOptions(hours, active)}
              </Picker.Column>
            </Picker>
          </div>
          <span className="time-divider">:</span>
          <div className="alarm-set-item">
            <Picker
              value={val}
              onChange={({ val3 }) => setVal({ ...val, val3 })}
              wheelMode="natural"
            >
              <Picker.Column name="val3">
                { renderOptions(minutes, active)}
              </Picker.Column>
            </Picker>
          </div>
        </div>
      </StyledAlarmPicker>
    </div>
  );
};

export default TimePicker;
