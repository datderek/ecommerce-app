import FilterOptions from './FilterOptions.jsx';
import styles from './FilterPanel.module.css';

function FilterPanel({ filterOptions, updateFilterHandler }) {
  const flavorProfiles = Array.from(filterOptions.flavorProfiles);
  const grindOptions = Array.from(filterOptions.grindOptions);
  const roastLevel = [1, 2, 3, 4, 5];
  const regions = Array.from(filterOptions.regions);

  return (
    <div className={styles['filter-panel']}>
      <div className={styles['filter-category']}>
        <p>Flavor Profile</p>
        <FilterOptions 
          category={'flavorProfiles'} 
          options={flavorProfiles} 
          updateFilterHandler={updateFilterHandler} 
        />
      </div>
      <div className={styles['filter-category']}>
        <p>Grind Options</p>
        <FilterOptions
          category={'grindOptions'}
          options={grindOptions}
          updateFilterHandler={updateFilterHandler} 
        />
      </div>
      <div className={styles['filter-category']}>
        <p>Roast Level</p>
        <FilterOptions 
          category={'roastLevels'} 
          options={roastLevel} 
          updateFilterHandler={updateFilterHandler} 
        />
      </div>
      <div className={styles['filter-category']}>
        <p>Region</p>
        <FilterOptions 
          category={'regions'} 
          options={regions} 
          updateFilterHandler={updateFilterHandler} 
        />
      </div>

    </div>
  )
}

export default FilterPanel;