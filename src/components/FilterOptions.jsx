import styles from './FilterOptions.module.css';

function FilterOptions({ category, options, selectedOptions, updateFilterHandler }) {
  return (
    <ul className={styles['filter-list']}>
      {options.map(option => {
        return (
          <li>
            <label>
              <input 
                type='checkbox' 
                defaultChecked={selectedOptions.has(option) ? true : false} 
                onClick={(e) => {
                  updateFilterHandler(category, option, e.target.checked)
                }
              }>
              </input>
              <span className={styles['option-name']}>{option}</span>
            </label>
          </li>
        )
      })}
    </ul>
  )
}

export default FilterOptions;