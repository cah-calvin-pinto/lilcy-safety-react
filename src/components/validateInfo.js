export default function validateInfo(values){
    let errors = {}

    if(!values.name.trim()){
        errors.name = "Name is required";
    }

    if(!values.email.trim()){
        errors.email = "Email required";
    } else if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)){
        errors.email = "Email address is invalid";
    }

    if(!values.phone.trim()){
        errors.phone = "Phone is required";
    }else if(values.phone.length > 15){
        errors.phone = "Phone number too long";
    }

    if(!values.query.trim()){
        errors.query = "query is required";
    }

    return errors;
}