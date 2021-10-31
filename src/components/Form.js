import  React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const[isSubmitted, setIsSubmitted] = useState(false);
    function submitFormTrue(){
        setIsSubmitted(true);
    }
    function submitFormFalse(){
        setIsSubmitted(false);
    }
    return (
        <>
        <div className='form-container'>
            {isSubmitted &&  <span className='close-btn' onClick={submitFormFalse}>×</span>}
          <div className='form-content-left'>
            <img className='form-img' src='img/img-2.svg' alt='spaceship' />
          </div>
          {!isSubmitted ? (
            <FormSignup submitForm={submitFormTrue} />
          ) : (
            <FormSuccess />
          )}
        </div>
      </>
    )
}

export default Form
