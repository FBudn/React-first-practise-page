const CheckBox = ({ logClick }) => {
  return (
    <div className="flex justify-start align-center items-center text-center gap-3 h-10 pl-1 -mt-2">
      <input
        onClick={logClick}
        type="checkbox"
        name="rememberPassword"
        id="rememberPasswordID"
      />
      <div className="text-sm font-medium">Remember me?</div>
    </div>
  );
};

export default CheckBox;
