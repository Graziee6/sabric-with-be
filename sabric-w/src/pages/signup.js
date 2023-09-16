import React from "react";
import Form from "./../components/form";

function signup() {
  const formHeading = "create free account";
  const p1 = "Already a member?";
  const p2 = "sign in";
  const buttonText = "create account";
  const linkTo = "/";
  const signupApi = "http://localhost:4370/"
  return (
    <div className="w-full justify-center m-auto align-middle items-center text-center bg-gray-100 flex flex-col flex-grow">
      <Form
        formHeading={formHeading}
        p1={p1}
        p2={p2}
        link={linkTo}
        buttonText={buttonText} api={signupApi}
      />
    </div>
  );
}

export default signup;
