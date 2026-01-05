import { useBudget } from "../../contexts/BudgetContext";

function RecentExpenses() {
    const { expensesList } = useBudget();
    return (
        <div>
            <p>Recent Expenses</p>
            <p>Your latest transactions</p>
            <div className="card">
                {expensesList ?
                    expensesList.map((expense, index) => (
                        <div key={index} className="d-flex flex-row mb-3">
                            <div className="d-flex flex-col ">
                                <div>
                                    <p>{expense.title}</p>
                                    <p className="text-success">{expense.category}</p>
                                    <p>{expense.date}</p>
                                </div>
                                <div>
                                    <p>{expense.amount} $</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <p>{expense.description}</p>
                            </div>
                        </div>
                    ))
                    : <p>No expenses yet. Start tracking your spending!</p>}
            </div>
        </div>
    )
}

export default RecentExpenses;