import Styles from './Start.module.css';
import NavBar from '../../components/navBar/Nav';
import Featured from '../../components/Featured/Featured';
import Carrousel from './../../components/Carrousel/Carrousel';

export default function Start() {
  return (
    <div className={Styles.container}>
      <div className={Styles.wrapper}>
        <NavBar />
      </div>
      <div className={Styles.content}>
        <div className={Styles.featured}>
          <Featured />
        </div>
        <div className={Styles.carrousel}>
          <Carrousel />
        </div>
      </div>
    </div>
  );
}
