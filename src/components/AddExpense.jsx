
const AddExpense = () => {

    return(
<div>
  <label htmlFor="quantity" className="block text-xs font-medium text-gray-700"> quantité </label>

  <input
    type="number"
    id="quantity"
    placeholder="0"
    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
  />
</div>
    )
}

export default AddExpense;