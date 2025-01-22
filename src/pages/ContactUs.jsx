import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Footer, Navbar } from "../components";
import { toast, Toaster } from "react-hot-toast";

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Log form data for debugging
    console.log("Form Data:", {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    });

    emailjs
      .sendForm(
        "service_pesxk0a", // Service ID
        "template_ltrhtmi", // Template ID
        form.current,
        "TUzqAigt47NSMyPnt" // Public Key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully!", {
            style: {
              border: "1px solid #4caf50",
              padding: "16px",
              color: "#4caf50",
            },
            icon: "✅",
          });
          form.current.reset(); // Reset the form fields
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            style: {
              border: "1px solid #f44336",
              padding: "16px",
              color: "#f44336",
            },
            icon: "❌",
          });
          console.error("Error:", error);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <h1 className="text-center fw-bold mb-4">Contact Us</h1>

        {/* Toaster Notifications */}
        <Toaster position="top-center" reverseOrder={false} />

        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="mx-auto"
          style={{ maxWidth: "500px" }}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              id="message"
              rows="4"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <div className="mx-auto text-center">
            <button type="submit" className="btn btn-secondary px-4">
              Send
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
