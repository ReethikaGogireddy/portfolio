import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "your_emailjs_service_id";
    const templateId = "your_emailjs_template_id";

    // Send email using Email.js
    emailjs
      .send(serviceId, templateId, { reply_to: email, message, subject })
      .then((response) => {
        alert("Email sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Email send failed: ", error);
      });
  };
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form id="justaform" onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            name="email"
            className="border border-gray-300 rounded-md p-2 w-full appearance-none"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="given-email"
          />
        </label>
        <br /> <br />
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </label>
        <br /> <br />
        <label>
          Message:
          <textarea
            name="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>
        <br /> <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
