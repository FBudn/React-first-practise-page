import { Link } from "react-router-dom";
const UserAlready = () => {
  return (
    <div className="flex w-full justify-center gap-1 mt-2">
      <div>Already a User?</div>
      <Link className="underline" to="/">
        LOGIN
      </Link>
    </div>
  );
};

export default UserAlready;
