const Buttons = ({ logClick }) => {
  return (
    <button
      onClick={logClick}
      className="flex w-full h-10 rounded-lg text-white justify-center items-center text-center bg-pink-500 font-medium shadow-md
    shadow-slate-400"
    >
      LOGIN
    </button>
  );
};

export default Buttons;