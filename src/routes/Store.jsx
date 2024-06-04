import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import ProductsList from "../components/ProductsList";
import FilterPanel from "../components/FilterPanel";
import styles from './Store.module.css';

function Store() {
  const [productList, setProductList] = useState([]);
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    flavorProfiles: new Set(),
    grindOptions: new Set(),
    regions: new Set(),
  });
  const [selectedFilterOptions, setSelectedFilterOptions] = useState({
    flavorProfiles: new Set(),
    grindOptions: new Set(),
    roastLevels: new Set(),
    regions: new Set(),
  });
  const [cart, setCart] = useOutletContext();

  // Queries API for items on mount
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://fake-coffee-api.vercel.app/api", { signal })
      .then((res) => res.json())
      .then((json) => setProductList(json));

    return () => {
      controller.abort();
    };
  }, []);

  // Resolves filter options after products have been retrieved
  useEffect(() => {
    const newFlavorProfiles = new Set();
    const newGrindOptions = new Set();
    const newRegions = new Set();

    productList.forEach((product) => {
      product['flavor_profile'].forEach(flavor => newFlavorProfiles.add(flavor));
      product['grind_option'].forEach(grind => newGrindOptions.add(grind));
      newRegions.add(product.region);
    })

    setFilterOptions({
      flavorProfiles: newFlavorProfiles,
      grindOptions: newGrindOptions,
      regions: newRegions,
    });
  }, [productList]);

  // Filter product list
  useEffect(() => {
    const filteredList = [...productList].filter((product) => {
      let hasFlavorProfile = selectedFilterOptions.flavorProfiles.size === 0 ? true : false;
      let hasGrindOption = selectedFilterOptions.grindOptions.size === 0 ? true : false;
      let hasRoastLevel = selectedFilterOptions.roastLevels.size === 0 ? true : false;
      let hasRegion = selectedFilterOptions.regions.size === 0 ? true : false;

      product['flavor_profile'].forEach(flavor => {
        if (selectedFilterOptions.flavorProfiles.has(flavor)) hasFlavorProfile = true;
      });

      product['grind_option'].forEach(grind => {
        if (selectedFilterOptions.grindOptions.has(grind)) hasGrindOption = true;
      });

      if (selectedFilterOptions.roastLevels.has(product['roast_level'])) hasRoastLevel = true;
      if (selectedFilterOptions.regions.has(product['region'])) hasRegion = true;

      return (hasFlavorProfile && hasGrindOption && hasRoastLevel && hasRegion);
    });

    setFilteredProductList(filteredList);
  }, [selectedFilterOptions, productList])

  const addHandler = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    let updatedCart;

    if (existingProduct) {
      const updatedProduct = { ...existingProduct, count: (Number(existingProduct.count) + Number(product.count)) }

      updatedCart = cart.map((p) => {
        if (p.id === updatedProduct.id) {
          return updatedProduct;
        }

        return p;
      })
    } else {
      updatedCart = [...cart];
      updatedCart.push(product);
    }

    setCart(updatedCart);
  };

  const updateFilterHandler = (category, option, checked) => {
    const prevSelectedOptions = new Set(selectedFilterOptions[category]);

    if (checked) {
      prevSelectedOptions.add(option);
    } else {
      prevSelectedOptions.delete(option);
    }

    setSelectedFilterOptions({...selectedFilterOptions, [category]: prevSelectedOptions});
  }

  return (
    <main>
      <div className={styles.header}>
        <h1>SHOP</h1>
        <h2>Check out our hand selected coffee beans!</h2>
      </div>
      <div className={styles.content}>
        <FilterPanel filterOptions={filterOptions} selectedFilterOptions={selectedFilterOptions} updateFilterHandler={updateFilterHandler}/>
        <ProductsList products={filteredProductList} addHandler={addHandler}
        />
      </div>
    </main>
  );
}

export default Store;
