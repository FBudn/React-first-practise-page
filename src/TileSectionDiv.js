import Buttons from "./Buttons";
import CheckBox from "./CheckBox";
import ForgotPassword from "./ForgotPassword";
import Icons from "./Icons";
import InputDiv from "./Input";
import Line from "./Line";
import SignOrLog from "./LogIn";
import NeedAcount from "./NeedAccount";

const TileDiv = () => {
  return (
    <div className="flex flex-col gap-2 justify-center w-4/5 align-start items-start text-zinc-600">
      <SignOrLog log="LOGIN" />
      <InputDiv />
      <CheckBox />
      <Buttons />
      <ForgotPassword />
      <Line />
      <Icons />
      <NeedAcount />
    </div>
  );
};

export default TileDiv;
