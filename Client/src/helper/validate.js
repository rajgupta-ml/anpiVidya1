
export async function registerValidate(values){
    const errors = registerVerify({}, values) 
    return errors
}
export async function loginValidation(values){
    const errors = registerVerify({}, values) 
    return errors
}
const registerVerify = (error = {}, values) => {
    if(!values.email){
        error.email = "email Required";
    }else if(values.email.includes(" ")){
        error.email = "Invalid email"
    }else if(values.email.length < 2 ){
        error.email = "email should be greater than 2 characters"
    }

    if(!values.password){
        error.password = "password Required";
    }


    if(values.password !== (values.confirmPassword)){
        error.confirmPassword = "password does not match";
    }else if(!values.password){
        error.confirmPassword = "confirm password required";
    }

    if(values.userType != "Student" && values.userType != "Teacher"){
        error.userType = "UserType Required"
    }
    return error
}
