import s from './OrderBy.module.css'

export default function OrderBy({ handlerFilters }) {
  return (
    <div className={s.divSort}>
      <p className={s.titles}>SORT BY</p>

      <div className={s.divRating}>
        <button
          onClick={() => {
            handlerFilters("valoration", "valoration")
          }}
          className={s.btn}
        >
          Avg Customer Review
        </button>
        <button
          onClick={() => {
            handlerFilters('price', 'ascending')
          }}
          className={s.btn}
        >
          Price: Low to High
        </button>
        <button
          onClick={() => {
            handlerFilters('price','descending')
          }}
          className={s.btn}
        >
          Price: High to Low
        </button>
      </div>
    </div>
  )
}
