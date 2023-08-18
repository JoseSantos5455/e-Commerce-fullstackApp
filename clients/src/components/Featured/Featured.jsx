import styles from './Featured.module.css'

const Featured = () => {
  return (
    <div className={`${styles.featured_container}`}>
      <div className={`${styles.products_name}`}>
        <h1 className={styles.title_product}>
          Productos destacados:
          <span className={styles.section}> Nueva sección disponible </span>
        </h1>
        <p className={styles.description}>
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn_better}>Armar Pc</button>
        <button className={styles.btn_category}>¿Cómo funciona?</button>
      </div>
    </div>
  )
}

export default Featured
