import FilterCategory from './FilterCategory.jsx';
import styles from './FilterPanel.module.css';

function FilterPanel({ filterOptions, updateFilterHandler }) {
  const flavorProfiles = Array.from(filterOptions.flavorProfiles);
  const grindOptions = Array.from(filterOptions.grindOptions);
  const regions = Array.from(filterOptions.regions);
  const roastLevels = [1, 2, 3, 4, 5];

  return (
    <div className={styles['filter-panel']}>
      <FilterCategory category={'flavorProfiles'} options={flavorProfiles} updateFilterHandler={updateFilterHandler}>Flavor Profile</FilterCategory>
      <FilterCategory category={'grindOptions'} options={grindOptions} updateFilterHandler={updateFilterHandler}>Grind Options</FilterCategory>
      <FilterCategory category={'roastLevels'} options={roastLevels} updateFilterHandler={updateFilterHandler}>Roast Levels</FilterCategory>
      <FilterCategory category={'regions'} options={regions} updateFilterHandler={updateFilterHandler}>Regions</FilterCategory>
    </div>
  )
}

export default FilterPanel;