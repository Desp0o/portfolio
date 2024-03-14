import { React, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import TitleComponent from "../titleComponent/titleComponent";
import { useSelector } from "react-redux";
import geolanguage from "../../geolang.json"
import englanguage from "../../englang.json"

export default function FourthSection() {
  const contactTitleRef = useRef();
  const form = useRef();

  const [languageJson, setLanguageJson] = useState(geolanguage)

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
      setLanguageJson(geolanguage)
    } else if (language === "eng") {
      setLanguageJson(englanguage)
    }
  }, [language]);

  return (
    <>
      <div className="contact geoStyle">
        <div className="contact_inner">
          <div className="contact_header">
            <TitleComponent propsRef={languageJson.contact} />
            <p
              className="geoContact"
              style={{ textAlign: "center", marginTop: "20px" }}
            >{languageJson.contactParagraph}</p>
          </div>

          <div className={formBg}>
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="simpleInput geoStyle"
                type="text"
                name="name"
                placeholder={languageJson.nameInput}
                required
              />
              <input
                className="simpleInput geoStyle"
                type="email"
                name="email"
                placeholder={languageJson.emailInput}
                required
              />
              <input
                className="simpleInput geoStyle"
                type="text"
                name="number"
                placeholder={languageJson.numberInput}
                required
              />
              <textarea
                className="textarea geoStyle"
                type="text"
                name="message"
                placeholder={languageJson.yourMessage}
                required
              />

              <div className="button_to_cont submit_parent">
                <button
                  className="submitBTN button_to_cont_inner geoStyle"
                  type="submit"
                >{languageJson.sendButton}</button>
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
