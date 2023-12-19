import { useState } from 'react';
import Picker from '../../../components/Picker';

const NormalPicker = () => {
  const [pickerValue, setPickerValue] = useState({
    height: '160',
  });

  return (
    <Picker
      className="px-4"
      value={pickerValue}
      onChange={setPickerValue}
      wheelMode="natural"
    >
      <Picker.Column name="height">
        {['158', '159', '160', '161', '162'].map((option) => (
          <Picker.Item key={option} value={option}>
            {({ selected }) => (
              <div className={selected ? 'font-semibold text-yellow-600' : 'text-neutral-400'}>{option}</div>
            )}
          </Picker.Item>
        ))}
      </Picker.Column>
    </Picker>
  );
};

export default NormalPicker;
