import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const FormTemplate = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".from-message");

  emailjs 
    .sendForm(
      "service_y4q20km",
      "template_5ni7fmu",
      form.current,
      process.env.REACT_APP_ID
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
    <div>
      
    </div>
  );
};

export default FormTemplate;