import { useState } from "react";
import { useBudget } from "../../contexts/BudgetContext";
import { useNavigate } from "react-router-dom";

function AddExpense() {
    const { monthlyBudget, remainingBudget, expenses, transactionsCount, expensesList, setMonthlyBudger, setRemainingBudget, setExpenses, setTransactionsCount, setExpensesList, addExpense} = useBudget();
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const [category, setCategory] = useState("food");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();
    const handleAddExpense = (e) => {
        e.preventDefault();
        addExpense(title, amount, date, category, description)
        navigate("/")

    }

    const handleReset = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <h4>Add Expense</h4>
            <p>Track your spending by adding a new expense</p>

            <div>
                <p>New Expense</p>
                <p>Fill in the details of your expense</p>
            </div>

            <form className="pb-2" onReset={handleReset} onSubmit={handleAddExpense}>
                <label htmlFor="title">Title</label>
                <input class="form-control" required type="text" onChange={(e) => setTitle(e.target.value)} value={title} name="" id="" />
                <label htmlFor="amount">Amount</label>
                <input class="form-control" required type="number" onChange={(e) => setAmount(e.target.value)} value={amount} name="" id="" />
                <label htmlFor="date">Date</label>
                <input class="form-control" required type="date" onChange={(e) => setDate(e.target.value)} value={date} name="" id="" />

                <label htmlFor="category">Category</label>
                <select class="form-control" required name="category" onChange={(e) => setCategory(e.target.value)} value={category} id="">
                    <option value="food">Food & Dining</option>
                    <option value="transportation">Transportation</option>
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="bills">Bills & Utilities</option>
                    <option value="healthcare">Healthcare</option>
                    <option value="education">Education</option>
                    <option value="travel">Travel</option>
                    <option value="other">other</option>
                </select>
                <textarea placeholder="description" class="form-control" name="" onChange={(e) => setDescription(e.target.value)} value={description} id=""></textarea>
                <button className="btn btn-success" type="submit">Add Expense</button>
                <button className="btn btn-danger" type="reset">Cancel</button>
            </form>
        </div>
    )
}

export default AddExpense;