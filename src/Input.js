import { useState } from "react";
import InputInfo from "./InputInfo";

const InputDiv = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [checkboxValue, setCheckbox] = useState("");

  return (
    <div className="flex flex-col gap-4 w-full mt-4">
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium">Email</div>
        <input
          id="emailInput"
          className="rounded-md border-stone-300 h-10 border-2"
          type="text"
          required
          value={emailValue}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="elo"
        />
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-sm font-medium">Password</div>

        <input
          id="passwordInput"
          className="rounded-md border-stone-300 h-10 border-2"
          type="text"
          required
          value={passwordValue}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex justify-start align-center items-center text-center gap-3 h-10 pl-1 -mt-2">
        <input
          type="checkbox"
          name="rememberPassword"
          id="rememberPasswordID"
          onChange={(e) => setCheckbox(e.target.checked.toString())}
        />
        <div className="text-sm font-medium">Remember me?</div>
      </div>
      <InputInfo
        emailValue={emailValue}
        passwordValue={passwordValue}
        checkboxValue={checkboxValue}
      />
    </div>
  );
};
export default InputDiv;
//export { Name };
/* e.targer to sam input w którym zawiera się ta funkcja
 <div className="hidden">
          <InputInfo
            email={document.getElementById("emailInput").value}
            password={document.getElementById("passwordInput").value}
          />
        </div>

         fetch("http://localhost:3000/#", {
      method: "POST",
      headers: { "Content type": "application/json" },
      body: JSON.stringify(inputData),
    });
    const inputData = { emailValue, passwordValue };
*/
