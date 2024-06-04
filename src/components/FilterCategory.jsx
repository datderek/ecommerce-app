import { useState } from "react";
import FilterOptions from "./FilterOptions.jsx";
import styles from './FilterCategory.module.css';

function FilterCategory({ category, options, selectedOptions, updateFilterHandler, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div className={styles['filter-category']}>
      <div onClick={handleClick} className={`${styles['filter-header']} ${isActive ? styles.active : null}`}>
        <p className={styles['category-name']}>{children}</p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"/></svg>
      </div>
      {isActive && <FilterOptions 
        category={category} 
        options={options} 
        selectedOptions={selectedOptions}
        updateFilterHandler={updateFilterHandler} 
      />}
    </div>
  )
}

export default FilterCategory;