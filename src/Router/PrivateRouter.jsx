// import React, { useContext } from "react";
// import { RecipeContext } from "../Context/RecipeProvider";
// import { Navigate, Outlet } from "react-router-dom";

// const PrivateRouter = () => {
//   const { name, password } = useContext(RecipeContext);
//   return name === "helen" && password === "1234" ? <Outlet/> : <Navigate to="/" />;
// };

// export default PrivateRouter;
import React, { useContext } from "react";
import { RecipeContext } from "../Context/RecipeProvider";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { name, password } = useContext(RecipeContext);

  if (name === "helen" && password === "1234") {
    return <Outlet />;
  }

  return <Navigate to="/" />;
};

export default PrivateRouter;
