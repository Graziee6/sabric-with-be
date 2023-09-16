import React, { useState } from "react";
import Input from "./input";
import TextArea from "./textArea";
import Button from "./button";
import AlternateText from "./alternateText";
import Logo from "../components/logo";
import { showToast } from "./functions";
import { useNavigate } from "react-router-dom";

function Form({ formHeading, buttonText, p1, link, p2, api }) {
  const inputType1 = "text";
  const inputName1 = "username";
  const inputName2 = "email";
  const inputName3 = "password";
  const inputType2 = "email";
  const placeholder1 = "your name";
  const placeholder2 = "your email";
  const textAreaPlaceholder = "password";

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const { username, email, password } = formData;
      if (!username || !email || !password) {
        showToast("Invalid credentials");
      }

      localStorage.setItem("jwtToken", "");
      // Send form data to the backend
      const response = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      const data = await response.json();
      console.log("data", data);
      showToast(data.message);

      if (!response.ok) {
        throw new Error("Login failed");
      }
      let jwtToken = data.data;
      localStorage.setItem("jwtToken", jwtToken);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("password", data.user.password);

      navigate("/profile");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-11/12 md:w-9/12 md:min-h-screen flex flex-col justify-center lg:justify-start lg:items-start lg:text-start items-center text-center p-4 align-middle lg:align-top lg:w-full lg:flex-row lg:gap-6 lg:p-0">
      <div className="w-0 lg:w-1/2 lg:min-h-screen">
        <img
          src="./assets/lg-bg-img.png"
          alt=""
          className="lg:w-full lg:h-full lg:bg-repeat-y lg:object-cover lg:object-center lg:flex-auto"
        />
      </div>
      <div className="lg:w-1/2">
        <div className="bg-transparent py-12 flex flex-col justify-center items-center lg:items-start lg:justify-start lg:px-4">
          <Logo />
        </div>
        <div className="flex flex-col gap-3 mb-2 lg:items-start lg:justify-start lg:w-9/12">
          <h1 className="font-bold flex-auto capitalize text-black text-4xl lg:text-5xl py-2">
            {formHeading}
          </h1>
          <p className=" font-normal flex-auto text-black text-medium">
            When, while lovely valley teems with vapour around atlas meant
            meridian the upper impenetrable.
          </p>
        </div>

        <div className="w-full">
          <form
            method="POST"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full"
          >
            <Input
              inputType={inputType1}
              inputPlaceholder={placeholder1}
              captureInput={handleChange}
              name={inputName1}
            />
            <Input
              inputType={inputType2}
              inputPlaceholder={placeholder2}
              captureInput={handleChange}
              name={inputName2}
            />
            <TextArea
              placeholder={textAreaPlaceholder}
              name={inputName3}
              captureInput={handleChange}
            />
            <Button buttonText={buttonText} />
          </form>
          <AlternateText p1={p1} link={link} p2={p2} />
        </div>
      </div>
    </div>
  );
}

export default Form;
