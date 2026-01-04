import { useBudget } from "../../contexts/BudgetContext";

function RecentExpenses() {
    const { expensesList } = useBudget();
    return (
        <div>
            <p>Recent Expenses</p>
            <p>Your latest transactions</p>
            <div>
                {expensesList ? 
                expensesList.map((expense, index) => (
                    <div>
                        <p>{expense.title}</p>
                        <p>{expense.amount}</p>
                        <p>{expense.date}</p>
                        <p>{expense.category}</p>
                        <p>{expense.description}</p>
                    </div>
                ))
                : <p>No expenses yet. Start tracking your spending!</p>}
            </div>
        </div>
    )
}

export default RecentExpenses;