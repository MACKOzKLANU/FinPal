import { createContext, useCallback, useContext, useState } from "react";
import { validateExpense } from "../utils/expenseHelpers";

const BudgetContext = createContext();

export const BudgetProvider = ( { children }) => {
    const [monthlyBudget, setMonthlyBudget] = useState(0);
    const [remainingBudget, setRemainingBudget] = useState(0)
    const [expenses, setExpenses] = useState(0);
    const [transactionsCount, setTransactionsCount] = useState(0);
    const [expensesList, setExpensesList] = useState([]);
    const [errors, setErrors] = useState([])


    const addExpense = useCallback((title, amount, date, category, description) => {
        let expense = {
            "title": title,
            "amount": amount,
            "date": date,
            "category": category,
            "description": description
        }
        const validationResult = validateExpense(amount);
        if(validationResult.ok) {
            console.log(remainingBudget)
            console.log(remainingBudget - 20)
            setExpensesList([...expensesList, expense]);
            setExpenses(expenses + parseInt(amount));
            setTransactionsCount(transactionsCount + 1);
            setRemainingBudget(remainingBudget - parseInt(amount));

            console.log(expense);

            return {success: true};
        }
        else {
            setErrors(validationResult.errors)
            validationResult.errors.map((error) => (
                console.log(error)
            ))
            return {success: false};
        }
    }, [remainingBudget]);

    const value = {
        // state
        monthlyBudget,
        remainingBudget,
        expenses,
        transactionsCount,
        expensesList,

        //state functions
        setMonthlyBudget,
        setRemainingBudget,
        setExpenses,
        setTransactionsCount,
        setExpensesList,

        //functions
        addExpense
    };

    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    )
}

export const useBudget = () => {
    const context = useContext(BudgetContext);
    if(!context) {
        throw new Error('useBudget must be used within an Budget provider');
    }
    return context;
}