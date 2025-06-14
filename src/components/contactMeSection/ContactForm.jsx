import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = (e) => {
    //  Prevents default form behavior.
    // Calls emailjs.sendForm() with:
    // Service ID: "service_zq0egks"
    // Template ID: "template_lmst7mg"
    // Form element via form.current
    // Public Key: "o0qCRqW5sUgO4zXSe"
    // ✅ On Success:
      // Clears form
      // Shows success message
    // ❌ On Failure:
      // Logs the error
    e.preventDefault();
    emailjs
      .sendForm("service_zq0egks", "template_lmst7mg", form.current, {
        publicKey: "o0qCRqW5sUgO4zXSe",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      {/* Adds a timestamp to the form data (custom metadata for the message). */}
        <input
          type="hidden"
          name="time"   // The name attribute is used by emailjs to identify the field value.
          className="h-0 w-0"
          value={new Date().toLocaleString()}
          onChange={() => {}}
        />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;