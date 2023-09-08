import Styles from './Abt.module.css'
import Nav from '../../components/navBar/Nav'

export default function Abt() {
    return (
            <div className={Styles.view}>
                <div className={Styles.wrapper}>
                    <Nav/>
                <h1>We are Dlujo®</h1>
        <div className={Styles.text}>

        <p>At Dlujo, we believe in the magic of the online shopping experience. Established in 2023, our mission is to provide you with a unique and exciting way to discover exceptional products and find items that perfectly fit your lifestyle.
        </p>
        <p>


            Our passion for quality and innovation drives us to carefully curate            each product in our store. From technology to forniture, every item has been selected with excellence in mind. We           believe that online shopping is not just about acquiring products but          also about immersing yourself in an experience that inspires and    enhances your life.
        </p>
        <p>

            What sets us apart? Beyond our vast and diverse catalog, we take pride          in offering exceptional customer service. Our team is here to assist you            at every step of the way, from answering your product inquiries to      ensuring your order arrives on time and in perfect condition. Your       satisfaction is our top priority.
        </p>
        <p>


            Thank you for being a part of the Dlujo family. We hope you enjoy the building something amazing.
        </p>
        <p>

            Happy shopping!

            The Dlujo Team
        </p>

        </div>
        <div className={Styles.images}>
        <img src="https://cu1.uicdn.net/e71/bb128f124110d97f707933a62ad0c/webapp/33904-n-stage-ssl-front-int.png" alt="" />
            <img src="https://www.buysafeamerica.org/getmedia/ed65bf3d-010a-4963-b0f6-6a5bdb0d01f9/BSAC_Logos_Finals_BSAC-Logo_color.png?width=461&height=220&ext=.png" alt="" />
            <img src="https://neosmiles.com.sg/wp-content/uploads/2021/09/Traffv-Trust-Verified.png" alt="" />
            
        </div>
                </div>
            </div>
  )
}
