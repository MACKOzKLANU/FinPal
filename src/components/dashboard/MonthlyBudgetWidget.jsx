import { useState } from "react";
import { useBudget } from "../../contexts/BudgetContext";

function MonthlyBudgetWidget() {
    const { monthlyBudget, setMonthlyBudget } = useBudget();

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
        }
        console.log("works")
    }

    return (
        <div>
            <div>
                <div className="walletIcon"></div>
                <p>Monthly budget</p>
            </div>
            <h3>$ {monthlyBudget}</h3>
            <button onClick={handleChangeAmmount}>change monthly budget</button>
            {showInput &&
                <div>
                    <form onSubmit={handleChangeMonthlyBudget}>
                        <label htmlFor="amount">Set Your Monthly Budget</label>
                        <input type="number" onChange={(e) => setInputAmount(e.target.value)} value={inputAmount} name="" id="" />
                        <p>{errorMessage && {errorMessage}}</p>
                        <button type="submit">Save</button>
                        <button type="reset">Cancel</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default MonthlyBudgetWidget;