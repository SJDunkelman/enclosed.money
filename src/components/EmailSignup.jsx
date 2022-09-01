import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function EmailSignup() {
  const form = useRef();
  const [signedUp, setSignUp] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSignUp(true);
    emailjs.sendForm('service_9aw8f4w', 'template_dboecfi', form.current, 'kiLBh2A-TZdJSwRnM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} class="flex flex-col items-center space-y-4 w-full">
      <input type="email" name="user_email" class="text-black px-2 py-1 w-full md:w-2/5 text-center btn-gradient-border active:bg-white active:bg-opacity-20" required placeholder="early@wagmi.com" />
      {
        signedUp === true ?
        <p className="gradient-text">Thanks for signing up! We'll email you within 24 hours</p> :
        <></>
      }
      {
        signedUp === false ?
        <input type="submit" value="Notify Me" class="border-ghost-white rounded-lg border-2 px-2 py-1 w-min hover:bg-[#e80d71] cursor-pointer" /> :
        <input type="submit" value="Thanks" class="border-ghost-white rounded-lg border-2 px-2 py-1 w-min" disabled />
      }
      
    </form>
  );
}