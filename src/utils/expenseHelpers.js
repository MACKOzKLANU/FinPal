export const validateExpense = (amount) => {
    let validationResult = {
        "ok": true,
        "errors": []
    }
    if(amount <= 0) {
        validationResult.ok = false;
        validationResult.errors.push("minimum amount is 1$");
    }
    return validationResult;
}