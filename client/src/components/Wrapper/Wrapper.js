import React from "react";
import "./style.css";
import { useAuth0 } from '@auth0/auth0-react';

function Wrapper(props) {

  const {
    isLoading,
    error,
  } = useAuth0();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  return <main className="wrapper container justify-content-center mt-5">{props.children}</main>;
}

export default Wrapper;
