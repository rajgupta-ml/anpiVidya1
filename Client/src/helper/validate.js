
export async function registerValidate(values){
    const errors = registerVerify({}, values) 
    return errors
}
export async function loginValidation(values){
    const errors = registerVerify({}, values) 
    return errors
}
const registerVerify = (error = {}, values) => {
    if(!values.username){
        error.username = "Username Required";
    }else if(values.username.includes(" ")){
        error.username = "Invalid Username"
    }else if(values.username.length < 2 ){
        error.username = "Username should be greater than 2 characters"
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
