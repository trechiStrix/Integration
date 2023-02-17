const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^(?=.*?[a-z])(?=.*?[0-9]).{6,10}$/;

export function validate(objUser){
    const errors = {};

    if(!regexEmail.test(objUser.username)){
        errors.username = "El usuario debe ser un email.";
    } else if(!objUser.username) {
        errors.username = "El usuario no puede quedar vacío.";
    } else if(objUser.username.length > 36){
        errors.username = "El usuario debe tener hasta 36 caracteres.";
    }

    if(!regexPassword.test(objUser.password)){
        errors.password = "La contraseña debe tener al menos un número y una letra."
    } else if(objUser.password.length < 6 || objUser.password.length > 10){
        errors.password = "La conmtrsseña debe tener entre 6 y 10 caracteres."
    }

    return errors;
}