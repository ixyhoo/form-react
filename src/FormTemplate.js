import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".form-message");

  emailjs 
    .sendForm(
      "service_amqqf1x",
      "template_534e5uk",
      form.current,
      "cdNh0lwy4ovTL_4GlCd7Z"
      )
      .then(
        (result) => {
        //console.log(result.text);
        form.current.reset();
        formMess.innerHTML = "<p class='success'>Your message has been sent!</p>";
        setTimeout(() => {
       formMess.innerHTML = "";
        }, 2500);
      },
      (error) => {
        //console.log(error.text); 
        formMess.innerHTML = "<p class='fail'>Sorry, your message has not been sent!</p>";
        setTimeout(() => {
        formMess.innerHTML= "";
      }, 2500); 
    }
 );
  
 
};
  return (
    <div className="form-container">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='name' required autoComplete='off' />
        <label >Email</label>
        <input type="email" name='email' required autoComplete='off' />
        <label> Message</label>
        <textarea name="message" required />
        <input type="submit" value="Envoyer" />
        <div className="form-message"></div>
        </form>
    </div>
  );
};

export default FormTemplate;