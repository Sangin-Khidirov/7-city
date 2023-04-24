import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "",
  email: "",
  message: "",
};
export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };
  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-7 contact-info">
            <div className="contact-item">
              <h3>Контактная информация</h3>
            </div>
            <div className="row">
              <div className="col-md-6">
                <p>
                  <span>
                    <a href="https://api.whatsapp.com/send?phone=79025870001" 
                      style={{margin: '0 12px 0 0'}} target="blank" >
                      <i className="fa fa-whatsapp fa-lg"></i>
                    </a>
                    <a href="tel:+79025870001" style={{margin: '0 12px'}} >
                      <i className="fa fa-phone fa-lg"></i> &nbsp;+7 902 587 00 01
                    </a>
                  </span>
                </p>
                <p>
                  <span>
                    <a href="mailto:seven.city7@yandex.ru" 
                      style={{margin: '0 12px 0 0'}} target="blank" >
                      <i className="fa fa-envelope-o fa-lg"></i> &nbsp;seven.city7@yandex.ru
                    </a>
                  </span>
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
