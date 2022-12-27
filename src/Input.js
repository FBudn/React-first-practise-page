//import { useState } from "react";
import Buttons from "./Buttons";
import InputInfo from "./InputInfo";

const InputDiv = () => {
  const logClick = () => {
    alert(`jestem`);
    /*<InputInfo
      emailValue={document.getElementById("emailInput").value}
      passwordValue={document.getElementById("passwordInput").value}
    />;*/
  };

  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium">Email</div>

        <input
          id="emailInput"
          className="rounded-md border-stone-300 h-10 border-2"
          type="text"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium">Password</div>
        <input
          id="passwordInput"
          className="rounded-md border-stone-300 h-10 border-2"
          type="text"
        />
        <Buttons logClick={logClick} />;
      </div>
    </div>
  );
};

export default InputDiv;

/* 
 <div className="hidden">
          <InputInfo
            email={document.getElementById("emailInput").value}
            password={document.getElementById("passwordInput").value}
          />
        </div>

        
*/
