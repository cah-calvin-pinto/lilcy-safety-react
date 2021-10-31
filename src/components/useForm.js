import { useState, useEffect } from 'react';

const useForm = (callback, validateInfo) => {

    const[values, setValues] = useState({
        name :'',
        phone:'',
        email:'',
        query:''
    })

    const[errors, setErrors] = useState({})
    const[isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = e => {
        const{name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors(validateInfo(values));
    }

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callback();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    // [values.username]: values.username,
                    // [values.email]: values.email,
                    // [values.password]: values.password
                        name: values.name,
                        phone: values.phone,
                        email: values.email,
                        query: values.query
                })
            };
            fetch('https://yn4q78sun4.execute-api.ap-south-1.amazonaws.com/prod/sendemail', requestOptions)
        }
    })
    return {handleChange, values, handleSubmit, errors}

}

export default useForm;