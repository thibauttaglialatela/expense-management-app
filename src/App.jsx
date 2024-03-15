import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpensesList from "./components/ExpensesList";
import { useReducer } from "react";

function App() {
  const initialState = {
    categoryList: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "addExpense":
        // eslint-disable-next-line no-case-declarations
        const newExpense = {
          id: Date.now(),
          category: action.payload.category,
          amount: action.payload.amount,
        };
        return {
          ...state,
          categoryList: [...state.categoryList, newExpense],
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);


  function handleAddExpense(category,amount) {
    dispatch({ type: "addExpense", payload: { category, amount } });
  }

  return (
    <>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-cyan-500">
        Mon application de gestion des dépenses
      </h1>
      <div className="flex justify-center items-center h-screen flex-col">
        <ExpenseForm onSubmit={handleAddExpense}/>
        <div className="w-screen">
        <ExpensesList categoryList={state.categoryList} />
        </div>
       
      </div>
    </>
  );
}

export default App;
