import MonthlyBudgetWidget from "./MonthlyBudgetWidget";
import RecentExpenses from "./RecentExpenses";
import StatsCards from "./StatsCards";

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <p>Overview of your budget and expenses</p>
            <MonthlyBudgetWidget></MonthlyBudgetWidget>
            <StatsCards></StatsCards>
            <RecentExpenses></RecentExpenses>
        </div>
    )
}

export default Dashboard;