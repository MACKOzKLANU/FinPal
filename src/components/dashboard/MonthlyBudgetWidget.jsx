import { useState } from "react";
import { useBudget } from "../../contexts/BudgetContext";

function MonthlyBudgetWidget() {
    const { monthlyBudget, expenses, setMonthlyBudget, remainingBudget, setRemainingBudget } = useBudget();

    const [showInput, setShowInput] = useState(false)
    const [inputAmount, setInputAmount] = useState(0);
    const [errorMessage, setErrorMessage] = useState("");
    const handleChangeAmmount = () => {
        setShowInput(!showInput);
    }

    const handleChangeMonthlyBudget = (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (inputAmount < 0) {
            setErrorMessage("minimum budget is 0$");
            console.log("error")
        }
        else {
            setMonthlyBudget(inputAmount);
            if(remainingBudget != 0) {
                setRemainingBudget(inputAmount - expenses)
            }
            else {
            setRemainingBudget(inputAmount);

            }
            
            handleChangeAmmount();
        }
        console.log("works")
    }

    return (
        <div className="">
            <div className="d-flex flex-row">
                <div className="walletIcon"></div>
                <p className="ms-2">Monthly budget</p>
            </div>
            <h3>$ {monthlyBudget}</h3>
            <button className="btn btn-primary mb-4" onClick={handleChangeAmmount}>change monthly budget</button>
            {showInput &&
                <div>
                    <form onSubmit={handleChangeMonthlyBudget}>
                        <label htmlFor="amount">Set Your Monthly Budget</label>
                        <input className="form-control" type="number" onChange={(e) => setInputAmount(e.target.value)} value={inputAmount} name="" id="" />
                        <p>{errorMessage && {errorMessage}}</p>
                        <button className="btn btn-success" type="submit">Save</button>
                        <button className="btn btn-danger ms-4" type="reset">Cancel</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default MonthlyBudgetWidget;