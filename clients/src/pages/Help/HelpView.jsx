import { Help } from "../../components/Help/Help";
import styles from "./HelpView.module.css";
export const HelpView = () => {
  return (
    <div className={styles.containerHelpView}>
      <Help />
    </div>
  );
};
