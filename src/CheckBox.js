//const checkboxBoolean = document.querySelector("#rememberPasswordID");
const CheckBox = () => {
  return (
    <div className="flex justify-start align-center items-center text-center gap-3 h-10 pl-1 -mt-2">
      <input type="checkbox" name="rememberPassword" id="rememberPasswordID" />
      <div className="text-sm font-medium">Remember me?</div>
      <div>hej + </div>
    </div>
  );
};
function validate() {
  if (document.getElementById("rememberPasswordID").checked) {
    return `checked`;
  } else {
    return `unchecked`;
  }
}

export default CheckBox;
