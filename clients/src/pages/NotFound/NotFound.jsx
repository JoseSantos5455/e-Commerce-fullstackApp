import img from "../../images/logo.png"
import style from "./NotFound.module.css"
import {Link} from "react-router-dom"

const NotFaund = () => {
  return (
    <div className={style.container}>
      <div className={style.logoDeLujo}>
          <img className={style.image} src={img} alt="logo" />
      </div>
        <img src="https://previews.123rf.com/images/vectorknight/vectorknight1711/vectorknight171100101/90815439-concepto-de-p%C3%A1gina-no-encontrada-error-404-p%C3%A1gina-web-con-cara-linda-de-dibujos-animados-l%C3%ADnea.jpg" alt="Error" width="200px" height="200px" />
      <div className={style.textContainer}>
        <h2>Parece que esta página no existe</h2>
        <Link to="/" className={style.playButton}>Volver a la página de inicio</Link>
      </div>
    </div>
  );
}

export default NotFaund