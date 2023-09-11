


import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Heading from './Heading';
function ContactForm() {
  const [state, handleSubmit] = useForm("mqkvbgqz");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <>
    <Heading/>
    <h1 className='bg-green-200 text-center justify-between font-bold '>Please fill following detail:</h1>
      <form onSubmit={handleSubmit}>
      <label  className="bg-amber-300" htmlFor="email" >
        Email Address
      </label>
      <input className='bg-green-200 justify-center items-center'
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="bg-sky-600" type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;
