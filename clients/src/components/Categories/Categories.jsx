import React from 'react'
import {Row, Col, Container } from 'react-bootstrap'
import Styles from './Categories.module.css'

export default function Categories() {
    let img1 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp69glXT_rtrGr2ssWLGFvf0cr6hPsWPSvsQ&usqp=CAU'
    let img2 ='https://previews.123rf.com/images/monticello/monticello1304/monticello130400076/19356061-assorted-grocery-products-including-vegetables-fruits-wine-bread-dairy-and-meat-isolated-on-white.jpg'
    let img3 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnvYj9DncF4W7wvrXQPKyoy2OQSX0cuL0Mv1Ehrkl82qSSFBVkzMiX4N9dC0Jy8L9Tcgs&usqp=CAU'
    let img4 ='https://www.autodeal.com.ph/custom/blog-post/header/top-5-aftermarket-products-that-can-help-enhance-your-vehicle-615eaf33891b9.jpg'
    let img5 ='https://www.doctorkiltz.com/wp-content/uploads/2022/10/AdobeStock_254584512-1-1030x665.jpeg'
    let img6 ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm8oxxqhYESd7CJxtn7MzbBrpHkdzbwi5c05tZphwSxh1MlX-f8hTI_8QAJveil0fhYSU&usqp=CAU'
  return (
    <Container fluid className={Styles.container_custom}>
        <Row >
            <Col className='d-flex flex-column justify-content-center align-items-center' >
                <img src={img1} alt="" />
                <p>Categorie 1</p>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center' >
                <img src={img2} alt="" />   
                <p>Categorie 2</p>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img src={img3} alt="" />
                <p>Categorie 3</p>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img src={img4} alt="" />
                <p>Categorie 4</p>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img src={img5} alt="" />
                <p>Categorie 5</p>
            </Col>
            <Col className='d-flex flex-column justify-content-center align-items-center'>
                <img src={img6} alt="" />
                <p>Categorie 6</p>
            </Col>
        </Row>
    </Container>
  )
}
