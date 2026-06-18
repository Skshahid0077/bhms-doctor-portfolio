import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = "YOUR_SERVICE_ID";
const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, {
      publicKey: PUBLIC_KEY,
    }).then(
      () => {
        setStatus("success");
        form.current.reset();
      },
      (error) => {
        console.error("EmailJS error:", error.text);
        setStatus("error");
      }
    );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-form-wrap">
          <h2>Appointment</h2>
          <div className="contact-underline"></div>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="user_name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email Address"
              required
            />
            <textarea
              name="message"
              placeholder="Write Your Message"
              rows="5"
              required
            ></textarea>

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Book Now"}
            </button>

            {status === "success" && (
              <p className="contact-status contact-status-success">
                Your appointment request was sent successfully.
              </p>
            )}
            {status === "error" && (
              <p className="contact-status contact-status-error">
                Something went wrong. Please try again or contact us directly.
              </p>
            )}
          </form>
        </div>

        <div className="contact-info-wrap">
          <h2>Contact Info</h2>
          <div className="contact-underline"></div>

          <p className="contact-info-text">
            Lorem ipsum dolor sit amete nilher, consectetured adipiscing elit.
            Nullam feugiat faucibus nibh gravida convallis massa sed fringilla.
            Pellentesque habitant dolor morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </p>

          <p><strong>Phone Number:</strong> +1 650-123-0000</p>
          <p><strong>Email Address:</strong> youremail@gmail.com</p>
          <p><strong>Clinic Address:</strong> Camino Real, Palo Alto, CA 94306 US</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;