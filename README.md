# FinPal - Personal Finance Manager 📊

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![INF.04](https://img.shields.io/badge/INF.04-Practical_Exam-blue?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-In_Development-yellow?style=for-the-badge)

A modern, React-based personal finance management application built as a practical project for the **INF.04** programming exam. Track your expenses, manage budgets, and gain insights into your spending habits.

## 🚀 Features

### ✅ Implemented
- **📊 Dashboard Overview** - Quick financial snapshot at a glance
- **💰 Monthly Budget Management** - Set and adjust your monthly spending limits
- **🧮 Financial Widgets**:
  - Total Expenses - Sum of all transactions
  - Remaining Budget - Real-time budget tracking
  - Transaction Count - Total number of transactions
- **➕ Add Expense Page** - Intuitive form for logging new expenses
- **🔐 User Authentication**:
  - login and registration
  - Protected routes with React Router
- **💾 Data Persistence** - Local storage for user data and transactions
- **🎨 Responsive UI** - Mobile-friendly design with custom CSS

### 🔜 Planned (Not Yet Implemented)
- **📈 Interactive Charts** - Visual spending analysis (Recharts integration)
- **🗂️ Transaction Categories** - Categorize expenses (Food, Entertainment, etc.)
- **🔍 Advanced Filtering** - Filter transactions by date, category, amount
- **📱 PWA Support** - Installable progressive web app
- **🌙 Dark Mode** - Theme switching functionality

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend library with hooks |
| **React Router 6** | Client-side routing |
| **Context API** | State management (Auth + Transactions) |
| **CSS Modules** | Component-scoped styling |
| **LocalStorage** | Client-side data persistence |
| **Custom CSS** | Tailored UI design |

## 📁 Project Structure


## ⚡ Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/MACKOzKLANU/FinPal.git
cd finpal
```

2. **Install dependencies**
```bash
npm install
```

3. **Start the React development server**
```bash
npm run dev
# Runs on http://localhost:3000
```

5. **Open your browser**
Navigate to `http://localhost:3000` to see the application.

## 🎯 Usage Guide

### 1. **Registration & Login**
- Create a new account

### 2. **Setting Your Budget**
- Navigate to Dashboard
- Click on the monthly budget widget
- Enter your desired monthly spending limit

### 3. **Adding Expenses**
- Go to "Add Expense" page
- Fill in expense details (amount, description)
- Submit to update your financial dashboard

### 4. **Monitoring Finances**
- Dashboard shows real-time updates
- Widgets display: total spent, remaining budget, transaction count
- All data persists between sessions

## 🎓 INF.04 Exam Relevance

This project demonstrates practical skills required for the **INF.04** practical exam:

| INF.04 Requirement | Implementation in FinPal |
|-------------------|--------------------------|
| **React Components** | Modular, reusable components with props |
| **State Management** | Context API for global state |
| **Routing** | Protected routes with React Router |
| **Forms & Validation** | Expense form with validation |
| **Responsive Design** | Mobile-first CSS approach |

## 🔧 Development Notes

### Key Challenges Solved:
1. **Authentication Flow** - Implemented secure route protection
2. **State Synchronization** - Real-time budget calculations
3. **Data Persistence** - LocalStorage with React state
4. **Component Architecture** - Clean separation of concerns

### Code Highlights:
- **Custom Hooks** for reusable logic
- **CSS Modules** for scoped styling
- **Error Boundaries** for graceful failure

## 📈 Future Enhancements

```javascript
// Potential additions for v2.0
const roadmap = [
  'Interactive charts with Recharts',
  'Expense categorization system',
  'Data export (CSV/PDF)',
  'Recurring expenses tracking',
  'Multi-currency support',
  'Collaborative budgeting (shared accounts)',
  'Mobile app with React Native'
];
```

## 🤝 Contributing

This is a learning project for INF.04 exam preparation. While not open for external contributions, students are encouraged to:

1. Fork the repository for personal practice
2. Implement the missing charts feature
3. Add new financial widgets
4. Improve the UI/UX design

## 📝 License

This project is created for **educational purposes** as part of INF.04 exam preparation. All code is available for learning and reference.

## 👨‍💻 Author

- GitHub: [@MACKOzKLANU]([https://github.com/MACKOzKLANU])
- Project created: January 2025

## 🙏 Acknowledgments

- **React Documentation** - For excellent learning resources
- **Npm create React App** - Project bootstrap
- **INF.04 Curriculum** - Project requirements and guidelines

---

<div align="center">
  <sub>Built with ❤️ for the INF.04 practical exam • "Track smarter, spend wiser"</sub>
</div>

---

**Note**: This is a demonstration project. Financial data is stored locally and not suitable for real financial management. Always use certified financial software for actual budgeting.
