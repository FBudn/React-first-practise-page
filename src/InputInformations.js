import InputDiv from "./Input";
import CheckBox from "./CheckBox";
import Buttons from "./Buttons";
import { useState } from "react";
const InputInfo = ({ email, password, getInfo }) => {
  function getInfo() {
    return <InputInfo />;
  }
  const [email, setEmail] = useState(
    document.getElementById("emailInput").value
  );
  const [password, setPassword] = useState(
    document.getElementById("passwordInput").value
  );
  const checkboxBoolean = document.getElementById("rememberPasswordID").checked;
  return (
    <div className="flex h-1/2 w-1/2">
      `${email}` `${password}` `${checkboxBoolean}`
    </div>
  );
};

export default InputInfo;

//tu funkcja onClicka buttona

/* 
 <div className="flex h-screen w-full">
      <div>{email}</div>
      <div>{password}</div>
      <div>{checkboxBoolean}</div>
    </div>
    */
