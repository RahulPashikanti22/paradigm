import React, { useState } from "react";
import alert from "../assets/images/alertbg.svg";
import flight from "../assets/images/backgrounds/flight.png";
import contactclose from "../assets/images/closecontact.svg";
import classNames from "classnames";

const Contact = () => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [formError, setFormError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value.trim() !== "") {
      setFormError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      setFormError("");
    }
  };

  const handleCommentsChange = (e) => {
    setComments(e.target.value);
    if (e.target.value.trim() !== "") {
      setFormError("");
    }
  };

  const handleSubmit = () => {
    let valid = true;

    if (name.trim() === "" || email.trim() === "" || comments.trim() === "") {
      setFormError("Please enter valid details in the above fields.");
      valid = false;
    } else if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      valid = false;
    }

    if (valid) {
      // Handle form submission
      alert("Form submitted successfully!");
      resetForm();
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setComments("");
    setFormError("");
  };

  const toggleShow = () => {
    setShow((prevShow) => {
      if (prevShow) {
        resetForm();
      }
      return !prevShow;
    });
  };

  return (
    <div className="relative group/contact">
      {show ? (
        <div
          onClick={toggleShow}
          className="flex justify-center items-center w-[60px] aspect-square cursor-pointer"
          style={{
            backgroundImage: `url('${contactclose}')`,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      ) : (
        <div
          onClick={toggleShow}
          className="flex justify-center items-center w-[60px] aspect-square cursor-pointer"
          style={{
            backgroundImage: `url('${alert}')`,
            backgroundPosition: "center",
            width: "90px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
        </div>
      )}
      <div
        className={classNames(
          "absolute shadow-lg bottom-[50%] left-[-550px] border border-[#2086fe] rounded-xl overflow-hidden",
          {
            visible: show,
            invisible: !show,
          }
        )}
      >
        <div className="flex ">
          <div className="w-[200px] bg-[#77C8E4] flex items-end">
            <img src={flight} className="w-full aspect-square"></img>
          </div>

          <div className="bg-white w-[350px] p-5 h-[460px] rounded-xl ">
            <div className="pb-2 font-bold text-[1.75em] capitalize">
              contact us
            </div>
            <div className="text-[1rem]">
              Please write your message and contact information below. We will
              respond as soon as possible
            </div>
            <div className="flex flex-col gap-y-2 pt-4 justify-center text-[0.875em]">
              <div>
                <span>Name</span>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  className="w-full border bg-[#e4e2e2] p-1 rounded-md "
                  placeholder="Name"
                />
              </div>
              <div>
                <span>Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full bg-[#e4e2e2] border p-1 rounded-md "
                  placeholder="Email"
                />
              </div>
              <div>
                <span>Comments</span>
                <textarea
                  rows={3}
                  value={comments}
                  onChange={handleCommentsChange}
                  className="w-full border bg-[#e4e2e2] p-1 rounded-md resize-none "
                  placeholder="Type here"
                />
              </div>
              {formError && <span className="text-red-500">{formError}</span>}
              <div className="w-[60%] m-auto">
                <button
                  onClick={handleSubmit}
                  className="w-full p-2 text-white rounded-md bg-[#2086fe] "
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
