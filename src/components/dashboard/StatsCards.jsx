import { useBudget } from "../../contexts/BudgetContext";

function StatsCards() {
    const { expenses, remainingBudget, transactionsCount } = useBudget();
    return (
        <div className="d-flex gap-5">
            <div className="card">
                <p>Total expenses</p>
                <p> ${expenses}</p>
            </div>
            <div className="card">
                <p>Remaining Budget</p>
                <p>^ ${remainingBudget}</p>
            </div>
            <div className="card">
                <p>Total Transactions</p>
                <p>{transactionsCount}</p>
            </div>
        </div>
    )
}

export default StatsCards;