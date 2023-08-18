import { Row, Col, Container } from 'react-bootstrap'
import Styles from './Categories.module.css'
import Clothes from '../../images/Categories/clothes.png'
import Market from '../../images/Categories/market.png'
import Furniture from '../../images/Categories/furniture.png'
import Cars from '../../images/Categories/cars.png'
import Beef from '../../images/Categories/beef.png'
import Tecnology from '../../images/Categories/tecnology.png'

export default function Categories() {
  let img1 = Clothes
  let img2 = Market
  let img3 = Furniture
  let img4 = Cars
  let img5 = Beef
  let img6 = Tecnology
  return (
    <Container fluid className={Styles.container_custom}>
      <Row>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={img1} alt="" />
          <p>Ropa</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={img2} alt="" />
          <p>Supermecardo</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={img3} alt="" />
          <p>Muebles</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={img4} alt="" />
          <p>Automóviles</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={img5} alt="" />
          <p>Categorie 5</p>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <img src={img6} alt="tecnologías" />
          <p>Tecnologías</p>
        </Col>
      </Row>
    </Container>
  )
}
