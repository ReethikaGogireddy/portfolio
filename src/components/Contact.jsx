import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_id", form.current, "your_publickey").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-r from-[#ff1b6b] to-[#45caff] pt-10 text-white"
    >
      <h1
        className="text-4xl font-bold text-white text-center"
        style={{ marginTop: "25px" }}
      >
        Contact
      </h1>
      <div className="" style={{ marginLeft: "300px", marginTop: "50px" }}>
        <form ref={form} onSubmit={sendEmail}>
          <div className="flex flex-col mt-50 justify-center align-middle w-full h-screen  max-w-[500px] max-h-[360px]  ">
            <div className="flex flex-row ">
              <label className="text-white btn-primary  rounded-full bg-[#F64C72] w-20 h-10">
                Name:
              </label>
              <input
                type="text"
                name="user_name"
                className="rounded-md w-32 h-10"
                value={onchange}
              />
            </div>
            <br /> <br />
            <div className="flex flex-row">
              <label className=" text-white btn-primary  rounded-full w-20 h-10 align-middle justify-center max-w-[500px] max-h-[360px] bg-white/25 shadow-white">
                Email:
              </label>
              <input
                type="email"
                name="user_email"
                className="rounded-md w-20 h-10 border-solid border-2 border-black "
              />
            </div>
            <br /> <br />
            <label className="text-white btn-primary  rounded-full  bg-white/25  max-w-[100px] max-h-[35px] align-middle justify-center border-solid border-black ">
              Message:
            </label>
            <textarea
              name="message"
              className=" rounded-md w-32 h-10 border-solid border-black "
            />{" "}
            <br />
            <br />
            <button className="btn-primary  rounded-full bg-white/25  text-white py-1 px-2 w-20 h-10">
              <input type="submit" value="Send" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Contact;
