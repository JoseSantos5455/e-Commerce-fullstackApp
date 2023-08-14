import React from 'react'
import Styles from './Carrousel.module.css'
import Carousel from 'react-bootstrap/Carousel';
import { Row } from 'react-bootstrap'
let img_car1 = 'https://i0.wp.com/get.witei.com/wp-content/uploads/2022/04/cartera-de-productos-ejemplos.jpg?fit=1200%2C675&ssl=1'
let img_car2 = 'https://www.enfasys.net/wp-content/uploads/2019/05/ecommerce.jpg'
let img_car3 = 'https://techjournal.org/wp-content/uploads/2021/12/Some-Awesome-new-electronic-gadgets-2021-1.jpg'



export default function Carrousel() {
  return (
    <Carousel className={Styles.car_custom}>
    <Carousel.Item interval={1000}>
     <img src= {img_car1} className="d-block w-100" alt="" />
     <Carousel.Caption>
        <h3>First slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <img src= {img_car2} className="d-block w-100" alt="" />
    <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img src= {img_car3} className="d-block w-100" alt="" />
          <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
  
}
