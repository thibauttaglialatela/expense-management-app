import { useState } from "react";
import SelectCategory from "./SelectCategory";
import AddExpense from "./AddExpense";

const ExpenseForm = ({ onSubmit }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [amount, setAmount] = useState(0);

  const handleAddExpense = () => {
    if (selectedCategory !== "" && amount !== 0) {
      onSubmit(selectedCategory, amount);
      setSelectedCategory("");
      setAmount(0);
    }
  };

  return (
    <div className="flex justify-between gap-4">
      <SelectCategory onSelectCategory={setSelectedCategory} />
      <AddExpense onSelectAmount={setAmount} />
      <button
        className="inline-block rounded border border-indigo-600 px-12 py-3 text-sm 
        font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white 
        focus:outline-none focus:ring active:bg-indigo-500"
        onClick={handleAddExpense}
      >
        Enregistrer
      </button>
    </div>
  );
};

export default ExpenseForm;
