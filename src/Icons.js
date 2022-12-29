const Icons = () => {
  return (
    <div className="flex w-full justify-center align-center items-center text-center gap-4 mt-4">
      <div onClick={() => console.log(`Google Clicked`)}>
        <img
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
          alt="google"
        />
      </div>
      <div onClick={() => console.log(`Facebook Clicked`)}>
        <img
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/665/665209.png"
          alt="fcb"
        />
      </div>
      <div onClick={() => console.log(`LinkedIn Clicked`)}>
        <img
          className="h-8 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/665/665212.png"
          alt="linkedin"
        />
      </div>
    </div>
  );
};

export default Icons;
