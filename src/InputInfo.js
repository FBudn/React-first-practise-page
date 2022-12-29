const InputInfo = ({ emailValue, passwordValue, checkboxValue }) => {
  return (
    <div
      id="inputInfoDIV"
      className="hidden align-center flex-col gap-4 absolute w-screen h-screen bg-green-400 left-0 top-0 z-500 justify-center items-center text-center"
    >
      <div className="flex rounded-full flex-col bg-orange-500 w-1/2 h-1/2 justify-center items-center text-center align-center">
        <div className="flex flex-col font-bold text-lg text-white w-1/3 lg:gap-2 lg:flex ">
          <p className="font-bold text-lg text-black "> Email: </p>
          {emailValue}
        </div>
        <div className="flex flex-col font-bold text-lg text-white w-1/3 lg:gap-2 lg:flex">
          <p className="font-bold text-lg text-black"> Passoword:</p>
          {passwordValue}
        </div>
        <div className="flex flex-col font-bold text-lg text-white w-1/3 lg:gap-2 lg:flex">
          <p className="font-bold text-lg text-black"> Is checkbox checked:</p>
          {checkboxValue}
        </div>
      </div>
    </div>
  );
};

export default InputInfo;
