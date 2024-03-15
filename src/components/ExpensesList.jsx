const ExpensesList = ({ categoryList }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Catégories
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Montants
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {categoryList.map((expense) => {
            return (
              <tr key={expense.id}>
                <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  {expense.category}
                </td>
                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                  {expense.amount}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfooter>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            Total
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-700">
            {categoryList.reduce((acc, current) => acc + parseInt(current.amount), 0)}
          </td>
        </tfooter>
      </table>
    </div>
  );
};

export default ExpensesList;
