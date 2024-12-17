import React, { useEffect, useState } from "react";
import Main from "./NotFoundStyle";
import { Navigate } from "react-router-dom";

const NotFound = () => {
  const [sayac, setSayac] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSayac((prevSayac) => prevSayac - 1);
    }, 1000);

    // Sayaç sıfıra ulaştığında zamanlayıcıyı temizle
    if (sayac === 0) {
      clearInterval(timer);
    }

    // Zamanlayıcıyı temizle
    return () => clearInterval(timer);
  }, [sayac]);

  console.log(sayac);

  if (sayac === 0) {
    return <Navigate to="/home" />;
  }
  return (
    <Main>
      <h3>Something went wrong</h3>
      <p>
        Within <strong>{sayac} </strong> seconds, you wil ve directed to the
        home page!
      </p>
    </Main>
  );
};

export default NotFound;
