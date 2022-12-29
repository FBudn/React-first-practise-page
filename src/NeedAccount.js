import { Link } from "react-router-dom";
const NeedAcount = () => {
  return (
    <div className="flex w-full justify-center gap-1 mt-2">
      <div>Need an account?</div>
      <Link className="underline" to="/Sign">
        SIGN UP
      </Link>
    </div>
  );
};

export default NeedAcount;

/* 
<a className="underline" href="#">
        SIGN UP
      </a>
      */
