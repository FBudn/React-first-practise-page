import { useEffect } from "react";

const useFetch = (url) => {
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/inputData")
        .then((res) => {
          if (!res.ok) {
            throw Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((inputData) => {
          setEmail(emailValue);
          setPassword(passwordValue);
        });
    }, 1000);
  }, [url]);

  return { emailValue, passwordValue };
};

export default useFetch;
