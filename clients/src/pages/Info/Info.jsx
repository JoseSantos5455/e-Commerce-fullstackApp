import Styles from './Info.module.css';
import Nav from '../../components/navBar/Nav';
export default function Info() {
  return (
    <div className={Styles.view}>
        
        <div className={Styles.wrapper}>
            <Nav/>
            <div className={Styles.div_one}>
            <h1>How It Works?</h1>
            <img src="https://www.wordworks.es/wp-content/uploads/2023/03/MAQUI-TRANS-3-1024x1024.png" alt="worker" className={Styles.img_worker} />
            </div>
            <p>At our tech-focused ecommerce store, we&apos;ve streamlined the   purchasing process to ensure you can get your hands on the    latest tech products quickly and conveniently. Here&apos;s how it   works:</p>
            <h2>Step 1: Browse and Select</h2>
            <div className={Styles.step_one}>

            <img src="https://www.itopvpn.com/assets/images/vpn-browser/privacy_icon_1.png" alt="browser" />
            <p>Explore our wide range of tech products and find exactly what    you&apos;re looking for. From cutting-edge gadgets to must-have     accessories, we have something for everyone. Simply choose the  products you love and add them to your shopping cart.</p>
            </div>

            <h3>Step 2: Make Your Purchase</h3>
            <p>Once you&apos;ve finished selecting your tech goodies, head to the    shopping cart and follow the easy steps to complete your   purchase. We accept card payments for your convenience and    security.</p>


            <h4>Step 3: Fast and Secure Shipping</h4>
            <div className={Styles.step_three}>

            <img src="https://assets.easypost.com/assets/images/redesign/simple_truck_01.5f67d451fa50f2d2ce2655c2483fd10f.png" alt="van shipping"  className={Styles.img_van}/>
            <p>After making your purchase, our team springs into action.    We&apos;ll carefully prepare your tech treasures and ship them to the   address you provided during checkout. Your product&apos;s safety is    our priority, ensuring they arrive in perfect condition.</p>
            </div>
            <h5>Step 4: Receive Your Product</h5>
            <div className={Styles.step_four}>

            <p>Anticipate with excitement as your package makes its way to  your doorstep. We&apos;re committed to speedy and efficient   deliveries. Once your package arrives, you can enjoy your new     tech products from the comfort of your own home.</p>
            <img src="https://cdn-icons-png.flaticon.com/512/3502/3502601.png" alt="package" className={Styles.img_package} />
            </div>
            
            <div className={Styles.text_down}>

            <p>At DLujo, we&apos;re dedicated to providing you with a seamless   shopping experience. Our aim is to make every step of the     process smooth and hassle-free for you. We hope you enjoy your  shopping and your new tech gear!</p>
            <p>Need further assistance or have questions? Feel free to reach    out to our customer support team. We&apos;re here to help every step    of the way.</p>
            </div>
        </div>
    </div>
  )
}
