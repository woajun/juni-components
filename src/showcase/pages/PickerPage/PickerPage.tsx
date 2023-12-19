import { useState } from "react";
import TimePicker from "./TimePicker";
import NormalPicker from "./NormalPicker";

function PickerPage() {
  const [val, setVal] = useState('');
  return (
    <div className="flex items-center flex-col gap-10 pt-10">
        <NormalPicker />
        <TimePicker value={val} handleValueChange={setVal}/>
    </div>
  );
}

export default PickerPage;
