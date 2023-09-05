import Card from './Card'
import Styles from './ListCard.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import { getPaginatedProducts } from '../../Redux/actions/actions';

export default function ListCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [currentPage, setCurrentPage] = useState(0);
  const pageSize = 12;
  const maxPage = Math.ceil(products.length / pageSize);

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      dispatch(getPaginatedProducts(currentPage - 1, pageSize));
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < maxPage - 1) {
      dispatch(getPaginatedProducts(currentPage + 1, pageSize));
      setCurrentPage(currentPage + 1);
    }
  };
  const startIdx = currentPage * pageSize;
  const endIdx = startIdx + pageSize;
  const productsToRender = products.slice(startIdx, endIdx);

  return (
    <div className={Styles.wrapper}>
      <h2 className={Styles.h2}> Products </h2>
      <div className={Styles.list}>
        {productsToRender && productsToRender.length > 0 ? (
          productsToRender.map((pdt, idx) => (
            <Card
              key={startIdx + idx}
              id={pdt.id}
              aviability={pdt.stock > 0}
              valoration={pdt.valoration}
              img={pdt.image}
              name={pdt.name}
              price={parseFloat(pdt.price)}
              isFavorite={pdt.favorite}
              stock={pdt.stock}
            />
          ))
        ) : (
          <p> No products </p>
        )}
      </div>
      <div>
        <button onClick={handlePreviousPage} disabled={currentPage === 0}>
          Previous
        </button>
        <span>Page {currentPage + 1}</span>
        <button onClick={handleNextPage} disabled={currentPage === maxPage - 1}>
          Next
        </button>
      </div>
    </div>
  );
}
