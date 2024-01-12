import { React, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import TitleComponent from "../titleComponent/titleComponent";
import { useSelector } from "react-redux";

export default function FourthSection() {
  const contactTitleRef = useRef();
  const contactParRef = useRef();
  const contactSendBtnRef = useRef();
  const inputName = useRef();
  const inputMail = useRef();
  const inputNumber = useRef();
  const inputText = useRef();
  const form = useRef();

  const serviceKey = import.meta.env.VITE_REACT_APP_SERVICE_KEY;
  const templateKey = import.meta.env.VITE_REACT_APP_TEMPLATE_KEY;

  const formBg = useSelector((state) => state.theme.setFormBg);
  const language = useSelector((state) => state.language.value);

  const message =
    language === "eng" ? "Message Is Sent!" : "თქვენი წერილი გაგზავნილია!";
  const notify = () =>
    toast(message, {
      icon: "✉️",
    });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceKey, templateKey, form.current, "k5sgg72-uloGuXB_E")
      .then(
        (result) => {},
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

    notify();
  };

  useEffect(() => {
    if (language === "geo") {
      contactTitleRef.current.innerText = "კონტაქტი";
      contactParRef.current.innerText =
        "დასაკონტაქტებლად შეავსეთ ქვემოთ მოცემული ველები და შეძლებისდგავარად სწრაფად მიიღებთ პასუხს";
      contactSendBtnRef.current.innerText = "გაგზავნა";
      inputName.current.placeholder = "სახელი";
      inputMail.current.placeholder = "ელფოსტა";
      inputNumber.current.placeholder = "ნომერი";
      inputText.current.placeholder = "თქვენი შეტყობინება";
    } else if (language === "eng") {
      contactTitleRef.current.innerText = "CONTACT";
      contactParRef.current.innerText =
        "Feel free to Contact me by submitting the form below and I will get back to you as soon as possible";
      contactSendBtnRef.current.innerText = "Send";
      inputName.current.placeholder = "Name";
      inputMail.current.placeholder = "Email";
      inputNumber.current.placeholder = "Number";
      inputText.current.placeholder = "Your Message";
    }
  }, [language]);

  return (
    <>
      <div className="contact geoStyle">
        <div className="contact_inner">
          <div className="contact_header">
            <TitleComponent propsRef={contactTitleRef} />
            <p
              className="geoContact"
              style={{ textAlign: "center", marginTop: "20px" }}
              ref={contactParRef}
            ></p>
          </div>

          <div className={formBg}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                ref={inputName}
                className="simpleInput geoStyle"
                type="text"
                name="name"
                required
              />
              <input
                ref={inputMail}
                className="simpleInput geoStyle"
                type="email"
                name="email"
                required
              />
              <input
                ref={inputNumber}
                className="simpleInput geoStyle"
                type="text"
                name="number"
                required
              />
              <input
                ref={inputText}
                className="textarea geoStyle"
                type="text"
                name="message"
                required
              />

              <div className="button_to_cont submit_parent">
                <button
                  className="submitBTN button_to_cont_inner geoStyle"
                  type="submit"
                  ref={contactSendBtnRef}
                ></button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Toaster
        toastOptions={{
          className: "toaster",
          duration: 6000,
          style: {
            border: "1px solid #000",
            padding: "16px",
            color: "#713200",
          },
        }}
      />
    </>
  );
}
