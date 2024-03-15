import "./App.css";
import SelectCategory from "./components/SelectCategory";
import AddExpense from "./components/AddExpense";
import ExpensesList from "./components/ExpensesList";
import { useEffect, useReducer } from "react";

function App() {
  const initialState = {
    selectedCategory: "",
    categoryList: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "selectCategory":
        return {
          ...state,
          selectedCategory: action.payload.category,
        };
      case "addExpense":
        // eslint-disable-next-line no-case-declarations
        const newExpense = {
          id: Date.now(),
          category: state.selectedCategory,
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

  useEffect(() => {
    if (state.selectedCategory !== "") {
      dispatch({ type: "addExpense", payload: { amount: state.amount}})
    }
  }, [state.selectedCategory, state.amount])

  function handleSelectCategory(selectedCategory) {
    dispatch({
      type: "selectCategory",
      payload: { category: selectedCategory },
    });
  }

  function handleAddExpense(amount) {
    dispatch({ type: "addExpense", payload: { amount: amount } });
  }


  return (
    <>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-cyan-500">
        Mon application de gestion des dépenses
      </h1>
      <div className="flex justify-center items-center h-screen flex-col">
        <AddExpense onSelectAmount={handleAddExpense} />
        <SelectCategory onSelectCategory={handleSelectCategory} />
        <ExpensesList categoryList={state.categoryList} />
      </div>
    </>
  );
}

export default App;
