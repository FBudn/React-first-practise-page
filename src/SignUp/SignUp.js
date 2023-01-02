import InputSignUp from "../InputSignUp";
import SignText from "../SignText";
import Buttons from "../Buttons";
import Line from "../Line";
import Icons from "../Icons";
import UserAlready from "../UserAlready";

const SignUpTile = () => {
  const logClick = () => {
    console.log(document.getElementById("emailInput").value);
    console.log(document.getElementById("passwordInput").value);
  };
  return (
    <div className="flex flex-col w-4/5 align-center justify-start items-center bg-white rounded-lg py-8 px-2 max-w-sm">
      <div className="flex flex-col gap-2 justify-center w-4/5 align-start items-start text-zinc-600 pb-16">
        <SignText log="SIGN UP" />
        <InputSignUp />
        <Buttons logClick={logClick} text="SIGN UP" />
        <Line />
        <Icons />
        <UserAlready />
      </div>
    </div>
  );
};

export default SignUpTile;
