import { useState } from "react";
import InputInfo from "./InputInfo";

const InputSignUp = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");

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
      <InputInfo emailValue={emailValue} passwordValue={passwordValue} />
    </div>
  );
};
export default InputSignUp;
