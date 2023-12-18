import { useState } from "react";
import TimePicker from "./TimePicker";

function PickerPage() {
  const [val, setVal] = useState('');
  return (
    <div className="flex items-center flex-col gap-10 pt-10">
        <TimePicker value={val} handleValueChange={setVal}/>
    </div>
  );
}

export default PickerPage;
