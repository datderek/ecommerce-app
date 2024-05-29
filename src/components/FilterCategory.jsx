import { useState } from "react";
import FilterOptions from "./FilterOptions.jsx";

function FilterCategory({ category, options, updateFilterHandler, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div>
      <p onClick={handleClick}>{children}</p>
      {isActive && <FilterOptions 
        category={category} 
        options={options} 
        updateFilterHandler={updateFilterHandler} 
      />}
    </div>
  )
}

export default FilterCategory;