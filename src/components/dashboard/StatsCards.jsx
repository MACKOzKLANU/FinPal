import { useBudget } from "../../contexts/BudgetContext";

function StatsCards() {
    const { expenses, remainingBudget, transactionsCount } = useBudget();
    return (
        <div>
            <div>
                <p>Total expenses</p>
                <p>$ ${expenses}</p>
            </div>
            <div>
                <p>Remaining Budget</p>
                <p>^ ${remainingBudget}</p>
            </div>
            <div>
                <p>Total Transactions</p>
                <p>{transactionsCount}</p>
            </div>
        </div>
    )
}

export default StatsCards;