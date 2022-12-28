import { useState } from "react";
import InputInfo from "./InputInfo";
const CheckBox = () => {
  const [checkboxValue, setCheckbox] = useState("");

  return (
    <div className="flex justify-start align-center items-center text-center gap-3 h-10 pl-1 -mt-2">
      <input
        type="checkbox"
        name="rememberPassword"
        id="rememberPasswordID"
        onChange={(e) => setCheckbox(e.target.value)}
      />
      <div className="text-sm font-medium">Remember me?</div>
      <InputInfo checkboxValue={checkboxValue} />
    </div>
  );
};

export default CheckBox;
