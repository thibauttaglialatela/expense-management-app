import { useState } from "react";

function SelectCategory() {
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <select
      name={"select"}
      value={category}
      onChange={handleChange}
      className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    >
      <option value={""}>Veuillez choisir une catégorie</option>
      <option value={"Alimentation"}>Alimentation</option>
      <option value={"Logement"}>Logement</option>
      <option value={"Transport"}>Transport</option>
      <option value={"Divertissement"}>Divertissement</option>
      <option value={"Santé"}>Santé</option>
      <option value={"Éducation"}>Éducation</option>
      <option value={"Autres"}>Autres</option>
    </select>
  );
}

export default SelectCategory;
