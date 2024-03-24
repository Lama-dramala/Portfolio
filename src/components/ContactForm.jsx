import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef();

  //   Текущие значения всех инпутов
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageValue] = useState("");

  //   Свойства отвечающие за то, был ли каждый из инпутов "тронут"
  //   Нужно для того, чтобы показывать ошибку только после взаимодействия пользователя с конкретным инпутом
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [messageTouched, setMessageTouched] = useState(false);

  //   Валидность каждого из инпутов
  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [messageIsValid, setMessageIsValid] = useState(false);

  //   Функции меняющие значение инпута и проверяющие его валидность
  function nameChangeHandler(e) {
    setNameValue(e.target.value);
    setNameIsValid(e.target.value.trim() !== "");
  }
  function emailChangeHandler(e) {
    setEmailValue(e.target.value);
    const isValid = String(e.target.value.trim())
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    setEmailIsValid(isValid);
  }
  function messageChangeHandler(e) {
    setMessageValue(e.target.value);
    setMessageIsValid(e.target.value.trim() !== "");
  }

  //   Функция, которая вызывается, когда какой-то из инпутов теряет фокус
  function blurHandler(e) {
    if (e.target.name == "user_name") {
      setNameTouched(true);
    }
    if (e.target.name == "user_email") {
      setEmailTouched(true);
    }
    if (e.target.name == "message") {
      setMessageTouched(true);
    }
  }

  //   Отправка письма
  const sendEmail = (e) => {
    e.preventDefault();

    const formIsValid = nameIsValid && emailIsValid && messageIsValid;

    if (formIsValid) {
      emailjs
        .sendForm("service_5khtest", "template_arybjqr", form.current, {
          publicKey: "s7CGgtxZgvMu09hb0",
        })
        .then(
          () => {
            setNameValue("");
            setEmailValue("");
            setMessageValue("");
            alert("Your message was successfully sent");
          },
          (error) => {
            alert("FAILED...", error.text);
          }
        );
    } else {
      alert("Please fill out the form correctly");
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact_form">
      <label className="contact_form_label">Your name</label>
      <div className={"contact_form_input_error" + (nameTouched && !nameIsValid ? " visible" : "")}>
        Please write your name
      </div>
      <input
        value={nameValue}
        onChange={(e) => nameChangeHandler(e)}
        onBlur={(e) => blurHandler(e)}
        type="text"
        name="user_name"
        className="contact_form_input"
      />
      <label className="contact_form_label">Your Email</label>
      <div className={"contact_form_input_error" + (emailTouched && !emailIsValid ? " visible" : "")}>
        Please write a correct Email
      </div>
      <input
        value={emailValue}
        onChange={(e) => emailChangeHandler(e)}
        onBlur={(e) => blurHandler(e)}
        type="email"
        name="user_email"
        className="contact_form_input"
      />
      <label className="contact_form_label">Your message</label>
      <div className={"contact_form_input_error" + (messageTouched && !messageIsValid ? " visible" : "")}>
        Please write your message
      </div>

      <textarea
        value={messageValue}
        onChange={(e) => messageChangeHandler(e)}
        onBlur={(e) => blurHandler(e)}
        name="message"
        className="contact_form_input"
      />
      <input type="submit" value="Send" className="contact_form_btn site-btn" />
    </form>
  );
};
