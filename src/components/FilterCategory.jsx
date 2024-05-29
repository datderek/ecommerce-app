import { useState } from "react";
import FilterOptions from "./FilterOptions.jsx";
import styles from './FilterCategory.module.css';
import arrowIcon from '../assets/arrow.svg';

function FilterCategory({ category, options, updateFilterHandler, children }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <div className={styles['filter-category']}>
      <div onClick={handleClick} className={`${styles['filter-header']} ${isActive ? styles.active : null}`}>
        <p className={styles['category-name']}>{children}</p>
        <img src={arrowIcon} alt='' />
      </div>
      {isActive && <FilterOptions 
        category={category} 
        options={options} 
        updateFilterHandler={updateFilterHandler} 
      />}
    </div>
  )
}

export default FilterCategory;