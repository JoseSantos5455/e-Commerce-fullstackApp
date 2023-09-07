import { Help } from "../../components/Help/Help";
import Nav from "../../components/navBar/Nav";
import styles from "./HelpView.module.css";
export const HelpView = () => {
  return (

      <div className={styles.containerHelpView}>
        <Nav />
        <Help />
      </div>

  );
};
