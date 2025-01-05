import React from "react";
import { Footer, Navbar } from "../components";

const ContactPage = () => {
  return (
    <>
   <Navbar/>
    <div className="container my-5">
      {/* العنوان */}
      <h1 className="text-center fw-bold mb-4">Contact Us</h1>
      
      {/* النموذج */}
      <form className="mx-auto" style={{ maxWidth: "500px" }}>
        {/* الحقل: الاسم */}
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
          />
        </div>
        
        {/* الحقل: البريد الإلكتروني */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
        </div>
        
        {/* الحقل: الرسالة */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            rows="4"
            placeholder="Enter your message"
          ></textarea>
        </div>
        
      <div className="mx-auto text-center ">
        <button type="submit" className="btn btn-secondary px-4  ">
          Send
        </button>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default ContactPage;
