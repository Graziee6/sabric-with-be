import React from "react";
import Logo from "../components/logo";
import { useState } from "react";
import { showToast } from "../components/functions";

function Profile() {
  let jwtToken = localStorage.getItem("jwtToken");
  let username = localStorage.getItem("username");
  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");
  const updateApi = "http://localhost:4370/updateUser";

  const getInputValues = () => {
    const inputs = document.querySelectorAll("input");
    return inputs;
  };

  const [formData, setFormData] = useState({
    username: username,
    email: email,
    password: password,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const editInputs = () => {
    const inputs = getInputValues();
    inputs.forEach(function (input) {
      input.readOnly = false;
    });
    inputs[0].focus();
    inputs[1].readOnly = true;
  };

  const reset = () => {
    const inputs = getInputValues();
    inputs[0].value = username;
    inputs[1].value = email;
    inputs[2].value = password;
    inputs.forEach(function (input) {
      input.readOnly = true;
    });
    inputs[0].focus();
  };

  const update = async (e) => {
    e.preventDefault();
    const response = await fetch(updateApi, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    const data = await response.json();
    console.log("data", data);
    console.log("data.data", data.data);
    showToast(data.message);
    localStorage.setItem("username", data.data.username);
    localStorage.setItem("email", data.data.email);
    localStorage.setItem("password", data.data.password);

    username = localStorage.getItem("username");
    email = localStorage.getItem("email");
    password = localStorage.getItem("password");

    reset();

    if (!response.ok) {
      throw new Error("Login failed");
    }
  };

  return (
    <div className="bg-white lg:bg-gray-200 h-full w-screen flex flex-col items-center p-0 text-base overflow-x-hidden">
      <div className="w-full relative bottom-32 overflow-x-hidden">
        <img
          src="./assets/artistic.jpeg"
          alt="artistic"
          className="w-screen -rotate-90 lg:w-0"
        />
      </div>
      <div className="w-full flex flex-col justify-center items-center px-6 lg:h-screen lg:w-5/12 lg:bg-white">
        <div className="w-46 lg:w-full py-6 relative bottom-[13rem] lg:bottom-6 flex flex-row justify-center items-center">
          <Logo />
        </div>
        <div className="w-full flex flex-row justify-between font-bold text-black relative bottom-48 lg:bottom-0 lg:mb-12 text-medium">
          <h1>Modify your profile</h1>
          <button
            className="underline capitalize cursor-pointer"
            onClick={editInputs}
          >
            Edit
          </button>
        </div>
        <div className="w-full flex flex-col justify-center items-center relative bottom-40 lg:bottom-0">
          <div className="w-full flex flex-col justify-center mb-10">
            <p className="capitalize text-left mb-2">username</p>
            <input
              type="text"
              className="capitalize px-5 py-1 bg-gray-200 font-bold rounded-md"
              required
              defaultValue={username}
              onChange={handleChange}
              name="username"
              readOnly
              min={3}
            />
          </div>
          <div className="w-full flex flex-col justify-center mb-10">
            <p className="capitalize text-left mb-2">email</p>
            <input
              type="email"
              className="lowercase px-5 py-1 bg-gray-200 font-bold rounded-md"
              required
              defaultValue={email}
              onChange={handleChange}
              name="email"
              min={3}
            />
          </div>
          <div className="w-full flex flex-col justify-center mb-10">
            <p className="capitalize text-left mb-2">password</p>
            <input
              type="password"
              className="px-5 py-1 bg-gray-200 font-bold rounded-md"
              required
              defaultValue={password}
              onChange={handleChange}
              name="password"
              min={3}
            />
          </div>

          {/* buttons */}
          <div className="w-full flex flex-row justify-evenly">
            <button
              type="submit"
              onClick={update}
              className="capitalize bg-orange-600 text-white px-4 py-2 rounded-md font-bold"
            >
              update
            </button>
            <button
              type="submit"
              onClick={reset}
              className="capitalize bg-red-200 text-black px-4 py-2 rounded-md font-bold"
            >
              cancel
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Profile;
