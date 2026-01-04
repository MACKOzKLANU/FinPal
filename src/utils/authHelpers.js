export const validatePassword = (password, confirmPassword) => {
    let validationResult = {
        "ok": true,
        "errors": []
    }
    if(password != confirmPassword) {
        validationResult.ok = false;
        validationResult.errors.push("passwords are not the same");
    }

    if(password.length < 8) {
        validationResult.ok = false;
        validationResult.errors.push("password is too short")
    }
    if(!/\d/.test(password)) {
        validationResult.ok = false;
        validationResult.errors.push("the password must contain at least 1 digit")

    }

    return validationResult;
}