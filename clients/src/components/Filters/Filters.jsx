import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories, getBrands } from '../../Redux/actions/actions'
import s from './Filters.module.css'

export default function Filters({ selectedCategory, onSelectChange, selectedBrand, onSelectChangeBrand }) {
  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)
  const brands = useSelector((state) => state.brands)
  const [currentValue, setCurrentValue] = useState(selectedCategory);
  const [currentBrandValue, setCurrentBrandValue] = useState(selectedBrand);

  useEffect(() => {
    dispatch(getCategories())
  }, [dispatch])

  useEffect(() => {
    dispatch(getBrands())
  }, [dispatch])

  useEffect(() => {
    setCurrentValue(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentBrandValue(selectedBrand);
  }, [selectedBrand]);

  const handleInternalSelectChange = (event) => {
    setCurrentValue(event.target.value);
    onSelectChange(event);
  };

  const handleBrandSelectChange = (event) => {
    setCurrentBrandValue(event.target.value);
    onSelectChangeBrand(event);
  }

  return (
    <div className={s.divSourceGenres}>
      <div>
        <p className={s.titles}>Categories</p>
        <select
          value={currentValue} onChange={handleInternalSelectChange}
          className={s.select}
        >
          <option value="">--Select--</option>
          {categories &&
            categories.map((g) => (
              <option value={g.id} key={g.id}>
                {g.name}
              </option>
            ))}
        </select>
        <p className={s.titles}>Brands</p>
        <select
          value={currentBrandValue} onChange={handleBrandSelectChange}
          className={s.select}
        >
          <option value="">--Select--</option>
          {brands &&
            brands.map((brand, index) => (
              <option value={brand} key={index}>
                {brand}
              </option>
            ))}
        </select>
      </div>
    </div>
  )
}
