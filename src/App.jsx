import "./App.css";
import SelectCategory from "./components/SelectCategory";
import AddExpense from "./components/AddExpense";

function App() {
  return (
    <>
      <h1 className="mb-2 mt-0 text-5xl font-medium leading-tight text-cyan-500">
        Mon application de gestion des dépenses
      </h1>
      <div className="flex justify-center items-center h-screen flex-col">
      <AddExpense />
      <SelectCategory />
      </div>
      
    </>
  );
}

export default App;
