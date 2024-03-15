import { useState } from "react";

const AddExpense = ({ onSelectAmount }) => {
    const [amount, setAmount] = useState(0);

    const handleChange = (event) => {
        const newAmount = event.target.value
        setAmount(newAmount);
        onSelectAmount(newAmount);
    }
    return(
<div>
  <label htmlFor="quantity" className="block text-xs font-medium text-gray-700">Montant(€)</label>

  <input
    type="number"
    onChange={handleChange}
    id="quantity"
    placeholder="0"
    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
  />
</div>
    )
}

export default AddExpense;