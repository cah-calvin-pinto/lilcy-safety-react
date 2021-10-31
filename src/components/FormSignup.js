import React from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import './Form.css';

const FormSignup = ({submitForm}) => {
    const{ handleChange, values, handleSubmit, errors } = useForm(submitForm, validateInfo);
    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1> Get started with us today! Fill out the form for any enquiries.</h1>
                <div className="form-inputs">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input id="name" type="text" name="name" className="form-input" placeholder="Enter your name" value={values.name} onChange={handleChange} />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input id="phone" type="text" name="phone" className="form-input" placeholder="Enter your phone number" value={values.phone} onChange={handleChange} />
                    {errors.phone && <p>{errors.phone}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input id="email" type="email" name="email" className="form-input" placeholder="Enter your email" value={values.email} onChange={handleChange}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="query" className="form-label">Query:</label>
                    <textarea id="query" type="text" name="query" className="form-input form-query" placeholder="Enter your query" value={values.query} onChange={handleChange}></textarea>
                    {errors.query && <p>{errors.query}</p>}
                </div>
                <button className="form-input-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormSignup
