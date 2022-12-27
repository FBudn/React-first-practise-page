import Buttons from "./Buttons";
import InputDiv from "./Input";

const InputInfo = ({ emailValue, passwordValue }) => {
  return (
    <div className="flex w-screen h-screen bg-green-400">
      <div>{emailValue}</div>
      <div>{passwordValue}</div>
    </div>
  );
};

export default InputInfo;
