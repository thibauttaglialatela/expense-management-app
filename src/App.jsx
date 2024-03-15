import "./App.css";
import SelectCategory from "./components/SelectCategory";
import AddExpense from "./components/AddExpense";
import { useReducer } from "react";

function App() {

  const initialState = {
    category:'',
    amount: 0
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "selectCategory":
        return {
          ...state,
          category: action.payload,
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSelectCategory(selectedCategory) {
    dispatch({ type: "selectCategory", payload: selectedCategory });
  }
  return (
    <>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-cyan-500">
        Mon application de gestion des dépenses
      </h1>
      <div className="flex justify-center items-center h-screen flex-col">
      <AddExpense />
      <SelectCategory onSelectCategory={handleSelectCategory}/>
      <p>Catégorie choisie : {state.category}</p>
      </div>
      
    </>
  );
}

export default App;
